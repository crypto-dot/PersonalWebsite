import 'astro/jsx-runtime';
import "./Project.css";
import { useEffect } from "preact/hooks";
export const Project = ({ projectImage, title, description, projectLink }) => {
    useEffect(() => {
        window.addEventListener("scroll", () => {
            console.log(window.scrollY);
        });
    }, []);
    return (

        <section class="project">
            <img
                class="projectImage"
                aria-label="project image"
                alt="project image"
                src={projectImage}
            />
            <div
                aria-label="project information"
                aria-description="Title and description of the project"
                class="projectInformation"
            >
                <div class="projectInformationTop">
                    <header>
                        <h1 class="projectTitle" aria-label="project title">{title}</h1>
                    </header>
                </div>
                <div class="projectInformationMiddle">
                    <p
                        class="projectInformationParagraph"
                        aria-label="project description"
                    >
                        {description}
                    </p>
                </div>
                <div class="projectInformationBottom">
                    <a href={projectLink}><button class="projectButton">Learn More</button></a>
                </div>
            </div>
        </section>
    );
}



