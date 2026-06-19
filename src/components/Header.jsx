import { useState, useEffect } from "react";
import BackBoneLogo from "../assets/images/Backbone_Logo.png";


export default function Header({ navigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scroll" : ""}`}>
      <div className="container">
        <div className="brand" onClick={() => navigate("/")}>
          <img src={BackBoneLogo} alt="Logo" className="brand-logo" />
          BackBone
        </div>


        <button
          className="toggler"
          onClick={() => setOpen(!open)}
        >
          &#9776;
        </button>

        <ul className={`nav-links ${open ? "open" : ""}`}>
          <li onClick={() => navigate("/")}>Home</li>
          {/* <li onClick={() => navigate("/services")}>What We Do</li>
          <li onClick={() => navigate("/about-us")}>Testimonials</li>
          <li onClick={() => navigate("/gallery")}>Gallery</li>
          <li onClick={() => navigate("/contact-us")}>Contact</li> */}
          <li onClick={() => navigate("/")}>What We Do</li>
          <li onClick={() => navigate("/")}>Testimonials</li>
          <li onClick={() => navigate("/")}>Gallery</li>
          <li onClick={() => navigate("/")}>Contact</li>
        </ul>
      </div>
    </nav>
  );
}
