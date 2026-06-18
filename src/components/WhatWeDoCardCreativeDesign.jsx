import { FaChartBar, FaCommentAlt } from "react-icons/fa";
import './WhatWeDoCard.css';
import promotion from '../assets/images/loudspeaker.png';

export default function WhatWeDoCardCreativeDesign() {
  return (
    <div className="wwd-card">


      <img src={promotion} alt="marketing" height={80} color="white" />

      <h3>Creative Design</h3>
      
      <p1>Our creative and design services transform ideas into compelling visual narratives. From branding systems to campaign assets, we ensure every design communicates clearly, stands out visually, and reflects your brand's personality with precision.</p1>

    </div>
  );
}
