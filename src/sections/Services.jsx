import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { servicesData } from "../constants";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";



const Services = () => {
  const Text = "I am AI Engineer and Full Stack Developer. I have made a lot projects on Medical AI, Healthcare APIs, and Scalable Web Apps.";

  const serviceRefs = useRef([]);
  const isDesktop = useMediaQuery({ minWidth: "48rem" });//768px

  useGSAP(() => {
    serviceRefs.current.forEach((el) => {
      if (!el)
        return;
      gsap.fromTo(el,
        { y: 200 },
        {
          y: 0,
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            once: true,
          },
          duration: 1,
          ease: "circ.out",
        }
      );
    });
  }, []);
  return <section id="services" className="min-h-screen bg-black rounded-t-4xl">
    <AnimatedHeaderSection
      subTitle={" यत: प्रवृत्तिर्भूतानां येन सर्वमिदं ततम्।  वकर्मणा तमभ्यर्च्य सिद्धिं विन्दति मानव: ॥"}
      Title={"Technical Expertise"}
      text={Text}
      textColor={"text-white"}
      withScrollTrigger={true}
    />

    {servicesData.map((service, index) => (
      <div
        ref={(el) => (serviceRefs.current[index] = el)}
        key={index}
        className="sticky px-10 pb-12 text-white bg-black border-t-2 border-white/30"
        style={
          isDesktop
            ? {
              top: `calc(10vh + ${index * 5}rem)`,
              marginBottom: `${(servicesData.length - index - 1) * 5}rem`,
            }
            : { top: 0 }
        } >
        <div className="flex items-center h-[5rem]">
          <h2 className="text-4xl lg:text-5xl font-light">
            {service.title}
          </h2>
        </div>
        <div className="flex flex-col gap-6 font-light mt-4">
          <p className="text-xl leading-relaxed tracking-widest lg:text-2xl text-white/60 text-pretty">
            {service.description}
          </p>
          <div className="flex flex-col gap-2 text-2xl sm:gap-4 lg:text-3xl text-white/80">
            {service.items.map((item, itemIndex) => (
              <div key={`item-${index}-${itemIndex}`} >
                <h3 className="flex">
                  <span className="mr-12 text-lg text-white/30">
                    0{itemIndex + 1}
                  </span>
                  {item.title}
                </h3>
                {itemIndex < service.items.length - 1 && (
                  <div className="w-full h-px my-2 bg-white/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

    ))}


  </section>
};


export default Services;
