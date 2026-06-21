import { useState, useEffect } from "react";
import LogoWhite from "../assets/images/backbone_logo1_white.png";
import LogoDark from "../assets/images/backbone_logo1_black.png";
import { useRef } from "react";

export default function Header({ navigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 50);

      if (currentScrollY > 600) {
        setHidden(true);
      } else {
        setHidden(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  useEffect(() => {
    const handleMouseMove = (e) => {
      if (window.scrollY > 100 && e.clientY <= 20) {
        setHidden(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);



  return (
    <nav
      ref={navRef}
      className={`navbar ${scrolled ? "scroll" : ""} ${hidden ? "hidden" : ""}`}
      onMouseLeave={() => {
        if (window.scrollY > 100) {
          setHidden(true);
        }
      }}
    >

      <div className="container">
        <div
          className="brand"
          onClick={() => handleNavigation("/")}
        >
          <img
            src={scrolled ? LogoDark : LogoWhite}
            alt="Backbone Logo"
            className="brand-logo"
          />
        </div>

        <button
          className="toggler"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Navigation"
        >
          ☰
        </button>

        <ul className={`nav-links ${open ? "open" : ""}`}>
          <li onClick={() => handleNavigation("/")}>Home</li>
          <li onClick={() => handleNavigation("/")}>What We Do</li>
          <li onClick={() => handleNavigation("/")}>Testimonials</li>
          <li onClick={() => handleNavigation("/")}>Gallery</li>
          <li onClick={() => handleNavigation("/")}>Contact</li>
        </ul>
      </div>
    </nav>
  );
}