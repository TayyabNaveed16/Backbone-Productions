import { FaChartBar, FaCommentAlt } from "react-icons/fa";
import './WhatWeDoCard.css';
import planning from '../assets/images/planning.png';

export default function WhatWeDoCardEvents() {
  return (
    <div className="wwd-card">


      <img src={planning} alt="planning" height={80} color="white" />

      <h3>Events</h3>
      
      <p1>Delivering seamless, unforgettable events that leave a lasting impact.</p1>

    </div>
  );
}
