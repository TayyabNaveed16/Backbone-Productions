import { FaChartBar, FaCommentAlt } from "react-icons/fa";
import './WhatWeDoCard.css';
import planning from '../assets/images/planning.png';

export default function WhatWeDoCardCorporateRetreats() {
  return (
    <div className="wwd-card">


      <img src={planning} alt="planning" height={80} color="white" />

      <h3>Corporate Retreats</h3>
      
      <p>We plan and deliver thoughtfully curated corporate retreats that balance productivity with experience. Each retreat is designed to foster collaboration, improve team alignment, and create an environment where ideas can grow and relationships can strengthen.</p>

    </div>
  );
}
