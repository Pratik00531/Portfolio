import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { useRef } from "react";
import { AnimatedTextLines } from "../components/AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const About = () => {
    const text = "I am an AI Engineer and Full Stack Developer focused on building scalable, production-ready systems in healthcare and intelligent applications. "
    const imgRef = useRef(null);
    const aboutText = `I am an AI Engineer and Full Stack Developer focused on building fast, scalable systems — from robust FastAPI backends to seamless React UIs. Every line of code is a promise: quality, performance, and long-term maintainability.
When I am not building core features:
⚡️ Designing intelligent automation workflows with n8n and Frappe
🏗️ Architecting complex databases with PostgreSQL and Supabase
📚 Studying philosophy and building structured habits for focus
🧗 Pursuing discipline, clarity, and steady progress in life`;

    useGSAP(() => {
        gsap.to("#about", {
            scale: 0.95,
            scrollTrigger: {
                trigger: "#about",
                start: "bottom 80%",
                end: "bottom 20%",
                scrub: true,
                markers: false,
            },
            ease: "power1.inOut",
        });

        gsap.set(imgRef.current, {
            clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
        });
        gsap.to(imgRef.current, {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            duration: 2,
            ease: "power4.out",
            scrollTrigger: { trigger: imgRef.current },
        });
    });



    return (
        <section id="about" className="min-h-screen bg-black rounded-b-4xl">
            <AnimatedHeaderSection
                subTitle={"यतः प्रवृत्तिर्भूतानां येन सर्वमिदं ततम् । स्वकर्मणा तमभ्यर्च्य सिद्धिं विन्दति मानवः ॥"}
                Title={"About"}
                text={text}
                textColor={"text-white"}
                withScrollTrigger={true}
            />
            <div className="flex flex-col items-center justify-between gap-16 px-10 pb-16 text-xl font-light tracking-wide lg:flex-row md:text-2xl lg:text-3xl text-white/60">
                <img
                    ref={imgRef}
                    src="/images/2.jpg"
                    alt="Pratik Patel"
                    className="w-md rounded-3xl"

                />
                <AnimatedTextLines text={aboutText} className={"w-full"} />
            </div>
        </section>
    );
};

export default About
