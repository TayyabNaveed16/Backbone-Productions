import { FaChartBar, FaCommentAlt } from "react-icons/fa";
import './WhatWeDoCard.css';
import promotion from '../assets/images/loudspeaker.png';

export default function WhatWeDoCardOutOfHome() {
  return (
    <div className="wwd-card">


      <img src={promotion} alt="marketing" height={80} color="white" />

      <h3>Out of Home</h3>
      
      <p1>We develop impactful out-of-home advertising strategies that place your brand in high-visibility environments. Through thoughtful placement and strong visual execution, we help you reach wider audiences and build strong public recognition.</p1>

    </div>
  );
}
