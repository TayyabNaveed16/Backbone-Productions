import React, { useState } from "react";
import ReactDOM from "react-dom/client";


//CSS Imports
import './App.css';
import './components/Header.css';
import './pages/Home.css';
import './components/Coverflow.css';


// Import pages
import Home from "./pages/home.jsx";
import Gallery from "./pages/gallery.jsx";
// import Awards from "./pages/awards.jsx";
import Services from "./pages/services.jsx";
import AboutUs from "./pages/about-us.jsx";
// import ContactUs from "./pages/contact-us.jsx";
import Header from "./components/Header.jsx";


function App() {
  const [route, setRoute] = useState(window.location.pathname);

  // Handle link clicks
  const navigate = (path) => {
    window.history.pushState({}, "", path);
    setRoute(path);
  };

  // Render page based on route
  let Page;
  switch (route) {
    case "/gallery": Page = Gallery; break;
    // case "/awards": Page = Awards; break;
    case "/services": Page = Services; break;
    case "/about-us": Page = AboutUs; break;
    // case "/contact-us": Page = ContactUs; break;
    case "/": 
    default: Page = Home; break;
  }

  return (
    <div>
      <Header navigate={navigate} />
      <hr />
      <Page />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
