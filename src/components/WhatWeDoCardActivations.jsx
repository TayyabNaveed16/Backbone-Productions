import { FaChartBar, FaCommentAlt } from "react-icons/fa";
import './WhatWeDoCard.css';
import activation from '../assets/images/loudspeaker.png';

export default function WhatWeDoCard() {
  return (
    <div className="wwd-card">


      <img src={activation} alt="activation" height={80} color="white" />

      <h3>Brand Activations</h3>

      <p1>Designing interactive experiences that captivate audiences and elevate your brand presence.</p1>

    </div>
  );
}
