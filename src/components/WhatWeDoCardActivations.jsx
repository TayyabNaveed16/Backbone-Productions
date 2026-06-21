import { FaChartBar, FaCommentAlt } from "react-icons/fa";
import './WhatWeDoCard.css';
import activation from '../assets/images/loudspeaker.png';

export default function WhatWeDoCard() {
  return (
    <div className="wwd-card">


      <img src={activation} alt="activation" height={80} color="white" />

      <h3>Brand Activations</h3>

      <p>We design and execute immersive brand activations that bring your identity to life in meaningful, interactive ways. From concept to execution, we focus on creating experiences that engage audiences, spark conversations, and strengthen emotional connection with your brand.</p>

    </div>
  );
}
