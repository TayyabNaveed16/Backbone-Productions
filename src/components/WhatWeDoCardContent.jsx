import { FaChartBar, FaCommentAlt } from "react-icons/fa";
import './WhatWeDoCard.css';
import promotion from '../assets/images/loudspeaker.png';

export default function WhatWeDoCard() {
  return (
    <div className="wwd-card">


      <img src={promotion} alt="marketing" height={80} color="white" />

      <h3>Talent Partnerships</h3>
      
      <p1>Connecting brands with the right talent to amplify reach and effectiveness.</p1>

    </div>
  );
}
