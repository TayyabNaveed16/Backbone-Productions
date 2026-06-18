import WhatWeDoCard from "../components/WhatWeDoCardActivations.jsx";
import WhatWeDoCardCorporateRetreats from "../components/WhatWeDoCardCorporateRetreats.jsx";
import WhatWeDoCardCreativeDesign from "../components/WhatWeDoCardCreativeDesign.jsx";
import WhatWeDoCardOutOfHome from "../components/WhatWeDoCardOutOfHome.jsx";
import Coverflow from "../components/Coverflow.jsx";
import Lottie from "lottie-react";
import animationData from "../assets/Web Development.json";


export default function Home() {
    return (



        <div className="home">


            <div className="lottieFloating">
                <Lottie animationData={animationData} loop />
            </div>



            <div className="HeroSection">




            </div>




            <div className="WhatWeDoSection">
                <h2>
                    What <span className="highlight">We</span> Do
                </h2>
                <p>Turning ideas into campaigns, campaigns into connections, and connections into results. That’s how we make marketing work for you.</p>



                <div className="WhatWeDoCardsWrapper">
                    <div className="WhatWeDoCardsRow">
                        <WhatWeDoCard />
                        <WhatWeDoCardCorporateRetreats />
                        <WhatWeDoCardCreativeDesign />
                        <WhatWeDoCardOutOfHome />
                    </div>

                </div>
            </div>



            <div className="WhatWeHaveBeenUpTo">
                <h2 >What <span className="highlight">We've</span> Been Up To</h2>
                <div className="coverflowDiv">
                    <Coverflow />
                </div>
            </div>



            {/* <div className="ContactUsSection">
                <h2 ><span className="highlight">Contact</span>Us</h2>

            </div> */}




        </div>
    );
}