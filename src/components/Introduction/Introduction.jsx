import { useEffect, useRef } from "preact/hooks";
import person from "../../assets/person.png";
import "./Introduction.css";
const Introduction = () => {
    const heroSectionHeader = useRef();
    const heroSectionImg = useRef();
    const heroSectionJobTitleSection = useRef();
    const heroSectionName = useRef();
    const heroSectionJobTitleSecondarySection = useRef();
    const heroSectionJobTitle = useRef();
    const heroSectionJobTitleSecondary = useRef();


    useEffect(() => {
        window.addEventListener("scroll", () => {
            let offset = window.scrollY;
            heroSectionHeader.current.style.transform = `translateY(${offset * 0.5}px) translateX(${offset + 0.1}px)`;
            heroSectionImg.current.style.transform = `translateY(${offset * 0.5}px) translateX(${offset + 0.1}px)`;
            heroSectionName.current.style.transform = `translateX(${offset}px)`;
            heroSectionJobTitleSection.current.style.backgroundPositionY = `${offset * .5}px`;
            heroSectionJobTitleSecondarySection.current.style.backgroundPositionY = `${offset * -.35}px`;
            heroSectionJobTitle.current.style.transform = `translateX(calc(200vh - ${offset}px))`;
            heroSectionJobTitleSecondary.current.style.transform = `translateX(calc(300vh - ${offset}px))`;
        });
    }, []);
    return (
        <section aria-label="">
            <section className="heroSectionIntroduction">
                <header className="heroSectionIntroductionWrapper">

                    <h1 ref={heroSectionHeader} className="heroSectionHeading">Hi</h1>

                    <img
                        ref={heroSectionImg}
                        className="heroSectionImage"
                        aria-label="man holding stack of papers"
                        alt="man holding stack of papers"
                        src={person}
                    />
                </header>
            </section>
            <section aria-label="name" class="heroSectionName">
                <header>
                    <h1 ref={heroSectionName} className="heroSectionNameHeading">I'm Carlos</h1>
                </header>
            </section>
            <section aria-label="primary job title" className="heroSectionJobTitle" ref={heroSectionJobTitleSection}>
                <header>
                    <h1 ref={heroSectionJobTitle} class="heroSectionNameHeading">Fullstack Dev</h1>
                </header>
            </section>
            <section
                aria-label="secondary job title"
                className="heroSectionJobTitleSecondary"
                ref={heroSectionJobTitleSecondarySection}
            >
                <header>
                    <h1 ref={heroSectionJobTitleSecondary} className="heroSectionNameHeading">Designer</h1>
                </header>
            </section>
        </section>
    );
}

export default Introduction