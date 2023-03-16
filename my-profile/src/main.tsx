import React from "react";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import LandingLayout from "./components/Layout/LandingLayout";
const Blog = React.lazy(() => import("../src/pages/Blog"));
const Contact = React.lazy(() => import("../src/pages/Contact"));
const Experience = React.lazy(() => import("../src/pages/Experience"));
const Home = React.lazy(() => import("../src/pages/Home"));
const Landing = React.lazy(() => import("../src/components/Layout/LandingLayout"));
const Skills = React.lazy(() => import("../src/pages/Skills"));

const Main = () => {
    const { ref: homeRef, inView: isHomeIntersected } = useInView({
        triggerOnce: true,
        threshold: 0.4,
    });
    const { ref: blogRef, inView: isBlogIntersected } = useInView({
        triggerOnce: true,
        threshold: 0.4,
    });
    const { ref: skillRef, inView: isSkillIntersected } = useInView({
        triggerOnce: true,
        threshold: 0.4,
    });
    const { ref: contactRef, inView: isContactIntersected } = useInView({
        triggerOnce: true,
        threshold: 0.4,
    });
    const { ref: experienceRef, inView: isExperienceIntersected } = useInView({
        triggerOnce: true,
        threshold: 0.4,
    });

    const [show, setShow] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setShow(false);
        }, 2000);
    }, []);

    if (!show) {

        return (
            <>
                <LandingLayout/>
                <section id="home" ref={homeRef}>
                    <Home isVisible={isHomeIntersected} />
                </section>
                <section id="blog" ref={blogRef}>
                    <Blog isVisible={isBlogIntersected}/>
                </section>
                <section id="skills" ref={skillRef}>
                    <Skills isVisible={isSkillIntersected} />
                </section>
                <section id="contact" ref={contactRef}>
                    <Contact isVisible={isContactIntersected} />
                </section>
                <section id="experience" ref={experienceRef}>
                    <Experience isVisible={isExperienceIntersected} />
                </section>
            </>
        );
    }
    return ( <Landing /> );
}

export default Main;
