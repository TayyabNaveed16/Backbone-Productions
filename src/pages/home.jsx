import WhatWeDoCard from "../components/WhatWeDoCardActivations.jsx";
import WhatWeDoCardEvents from "../components/WhatWeDoCardEvents.jsx";
import WhatWeDoCardContent from "../components/WhatWeDoCardContent.jsx";
import WhatWeDoCardTalent from "../components/WhatWeDoCardTalent.jsx";
import Coverflow from "../components/Coverflow.jsx";

export default function Home() {
    return (
        <div className="home">
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
                        <WhatWeDoCardEvents />
                        <WhatWeDoCardContent />
                        <WhatWeDoCardTalent />
                    </div>

                </div>
            </div>



            <div className="ClientsSaySection">
                <h2 >Where <span className="highlight">We've</span> Been Up To</h2>
                <div className="coverflowDiv">
                    <Coverflow />
                </div>
            </div>




        </div>
    );
}