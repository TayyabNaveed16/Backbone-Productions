import React, { useEffect, useRef } from "react";
import GenMB_Fast from "../assets/images/Projects/GenMB_Fast.jpg";
import GenMB_GIKI from "../assets/images/Projects/GenMB_GIKI.jpg";
// import lake from "../assets/images/infinite-loop-01.jpg";
import BinanceCommunityMeetup from "../assets/images/Projects/BinanceCommunityMeetup.jpg";
import BinanceCommunityMeetup_2 from "../assets/images/Projects/BinanceCommunityMeetup_2.jpg";
import JazzSalesConference from "../assets/images/Projects/JazzSalesConference.jpg";
import JazzSalesConference_2 from "../assets/images/Projects/JazzSalesConference_2.jpg";


const images = [
  { src: GenMB_GIKI, title: "GenMB GIKI", description: "A cutting-edge solution for modern applications" },
  { src: GenMB_Fast, title: "GenMB Fast", description: "A fast and efficient solution for your needs" },
  { src: JazzSalesConference, title: "Jazz Sales Conference", description: "Networking and sales training in a lively jazz atmosphere" },
  { src: BinanceCommunityMeetup, title: "Binance Community Meetup", description: "Connecting crypto enthusiasts in a vibrant community event" },
  { src: BinanceCommunityMeetup_2, title: "Binance Community Meetup", description: "Connecting crypto enthusiasts in a vibrant community event" },
  { src: JazzSalesConference, title: "Jazz Sales Conference", description: "Networking and sales training in a lively jazz atmosphere" },
  { src: JazzSalesConference_2, title: "Jazz Sales Conference", description: "Networking and sales training in a lively jazz atmosphere" },
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


        </div>


        <div className="controls">
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
