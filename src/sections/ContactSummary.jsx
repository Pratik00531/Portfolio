import { useGSAP } from "@gsap/react";
import Marquee from "../components/Marquee";
import { useRef } from "react";
import gsap from "gsap";


const ContactSummary = () => {
 const containerRef = useRef(null);
 const items = ["Web", "AI", "Innovation","Creativity","Excellence"];
 const items2 = ["Contact me on", "LinkedIn", "GitHub","Twitter","Email"];

 useGSAP(() => {
 gsap.to(containerRef.current, {
    scrollTrigger: {
        trigger: containerRef.current,
        start:"center center",
        end:"+=800 center",
        scrub:0.5,
        pin:true,
        pinSpacing:true,

    },
    });
},[]);
return (
  <section 
  ref={containerRef}
  className="flex flex-col items-center justify-between min-h-screen
  gap-12 mt-16"
  >
    <Marquee items={items} />

    <div className="overflow-hidden font-light text-center
    contact-text-responsive">
        <p>
            "Let's build a "<br/>
            <span className="font-normal">
                memorable
            </span> & {" "}
            <span className="italic">inspiring </span> <br/>
            web / AI apps  <span className="text-gold">
                together.
            </span>
        </p>
    </div>
<Marquee items={items2} reverse={true}
className="text-black bg-transparent border-y-2 "
iconClassName="text-gold"
icon="mdi:square-outline"
/>

  </section>
);
};

export default ContactSummary;