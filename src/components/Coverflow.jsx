import React, { useEffect, useRef } from "react";
import mountain from "../assets/images/infinite-loop-01.jpg";
import forest from "../assets/images/infinite-loop-01.jpg";
import lake from "../assets/images/infinite-loop-01.jpg";
import ocean from "../assets/images/infinite-loop-01.jpg";
import dunes from "../assets/images/infinite-loop-01.jpg";
import stars from "../assets/images/infinite-loop-01.jpg";
import waterfall from "../assets/images/infinite-loop-01.jpg";


const images = [
  { src: mountain, title: "Mountain Landscape", description: "Majestic peaks covered in snow during golden hour" },
  { src: forest, title: "Forest Path", description: "A winding trail through ancient woodland" },
  { src: lake, title: "Lake Reflection", description: "Serene waters mirroring the surrounding landscape" },
  { src: ocean, title: "Ocean Sunset", description: "Golden hour over endless ocean waves" },
  { src: dunes, title: "Desert Dunes", description: "Rolling sand dunes under vast blue skies" },
  { src: stars, title: "Starry Night", description: "Countless stars illuminating the dark sky" },
  { src: waterfall, title: "Waterfall", description: "Cascading water through lush green forest" },
];

export default function Coverflow() {
  const containerRef = useRef();
  const itemsRef = useRef([]);
  const dotsRef = useRef([]);
  const currentTitleRef = useRef();
  const currentDescriptionRef = useRef();
  const autoplayRef = useRef(null);
  const isPlayingRef = useRef(true);
  const currentIndexRef = useRef(3);
  const isAnimatingRef = useRef(false);

  useEffect(() => {
    const container = containerRef.current;

    // Create dots dynamically
    images.forEach((_, idx) => {
      const dot = document.createElement("div");
      dot.className = "dot";
      dot.onclick = () => goToIndex(idx);
      container.querySelector(".dots-container").appendChild(dot);
    });
    dotsRef.current = Array.from(container.querySelectorAll(".dot"));

    // Initialize items refs
    itemsRef.current = Array.from(container.querySelectorAll(".coverflow-item"));

    function updateCoverflow() {
      if (isAnimatingRef.current) return;
      isAnimatingRef.current = true;

      itemsRef.current.forEach((item, index) => {
        let offset = index - currentIndexRef.current;
        if (offset > itemsRef.current.length / 2) offset -= itemsRef.current.length;
        if (offset < -itemsRef.current.length / 2) offset += itemsRef.current.length;

        const absOffset = Math.abs(offset);
        const sign = Math.sign(offset);

        let translateX = offset * 220;
        let translateZ = -absOffset * 200;
        let rotateY = -sign * Math.min(absOffset * 60, 60);
        let opacity = 1 - absOffset * 0.2;
        let scale = 1 - absOffset * 0.1;
        if (absOffset > 3) {
          opacity = 0;
          translateX = sign * 800;
        }

        item.style.transform = `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`;
        item.style.opacity = opacity;
        item.style.zIndex = 100 - absOffset;
        item.classList.toggle("active", index === currentIndexRef.current);
      });

      dotsRef.current.forEach((dot, index) => {
        dot.classList.toggle("active", index === currentIndexRef.current);
      });

      const currentData = images[currentIndexRef.current];
      currentTitleRef.current.textContent = currentData.title;
      currentDescriptionRef.current.textContent = currentData.description;

      currentTitleRef.current.style.animation = "none";
      currentDescriptionRef.current.style.animation = "none";
      setTimeout(() => {
        currentTitleRef.current.style.animation = "fadeIn 0.6s forwards";
        currentDescriptionRef.current.style.animation = "fadeIn 0.6s forwards";
      }, 10);

      setTimeout(() => (isAnimatingRef.current = false), 600);
    }

    function navigate(direction) {
      if (isAnimatingRef.current) return;
      currentIndexRef.current += direction;
      if (currentIndexRef.current < 0) currentIndexRef.current = itemsRef.current.length - 1;
      if (currentIndexRef.current >= itemsRef.current.length) currentIndexRef.current = 0;
      updateCoverflow();
    }

    function goToIndex(index) {
      if (isAnimatingRef.current || index === currentIndexRef.current) return;
      currentIndexRef.current = index;
      updateCoverflow();
    }

    function startAutoplay() {
      autoplayRef.current = setInterval(() => {
        currentIndexRef.current = (currentIndexRef.current + 1) % itemsRef.current.length;
        updateCoverflow();
      }, 4000);
      isPlayingRef.current = true;
      container.querySelector(".play-icon").style.display = "none";
      container.querySelector(".pause-icon").style.display = "block";
    }

    function stopAutoplay() {
      clearInterval(autoplayRef.current);
      isPlayingRef.current = false;
      container.querySelector(".play-icon").style.display = "block";
      container.querySelector(".pause-icon").style.display = "none";
    }

    function toggleAutoplay() {
      if (isPlayingRef.current) stopAutoplay();
      else startAutoplay();
    }

    container.querySelector(".play-pause-button").onclick = toggleAutoplay;

    // Item clicks
    itemsRef.current.forEach((item, index) => item.addEventListener("click", () => goToIndex(index)));

    // Keyboard navigation
    container.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") navigate(-1);
      if (e.key === "ArrowRight") navigate(1);
    });

    updateCoverflow();
    startAutoplay();

    return () => clearInterval(autoplayRef.current);
  }, []);

  return (
    <section id="home" className="section">
      <div className="coverflow-wrapper" ref={containerRef} tabIndex="0">
        <div className="info">
          <h3 ref={currentTitleRef}></h3>
          <p ref={currentDescriptionRef}></p>
        </div>

        <div className="coverflow-container">
          <div className="coverflow">
            {images.map((img, idx) => (
              <div key={idx} className="coverflow-item" data-index={idx}>
                <div className="cover image-loading">
                  <img src={img.src} alt={img.title} loading="lazy" />
                </div>
                <div className="reflection"></div>
              </div>
            ))}
          </div>


          <div className="dots-container"></div>

          <button className="play-pause-button">
            <span className="play-icon">▶</span>
            <span className="pause-icon" style={{ display: "none" }}>❚❚</span>
          </button>
        </div>
      </div>
    </section>
  );
}
