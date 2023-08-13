import { useEffect, useRef, useState } from "preact/hooks";
import LinkedInLogo from "../../assets/linkedinLogo.jpg";
import GithubLogo from "../../assets/github-mark.png";
import "./Introduction.scss";
const Introduction = () => {
    const svg = useRef();
    const button = useRef();
    const buttonClone = useRef();
    const lineTop = useRef();
    const lineBottom = useRef();
    const dialog = useRef();
    const anchorLink = useRef();
    const [isActive, setIsActive] = useState(false);
    const handleResize = () => {
        dialog.current.style.paddingLeft = `${anchorLink.current.getBoundingClientRect().left}px`;
        buttonClone.current.style.left = `${button.current.getBoundingClientRect().left}px`;
    };
    const addActiveClasses = () => {
        lineTop.current.classList.add("line__top--active");
        lineBottom.current.classList.add("line__bottom--active");
        lineBottom.current.classList.remove("line__bottom--deactive");
        lineTop.current.classList.remove("line__top--deactive");
    }
    const addDeactiveClasses = () => {
        lineTop.current.classList.remove("line__top--active");
        lineBottom.current.classList.remove("line__bottom--active");
        lineTop.current.classList.add("line__top--deactive");
        lineBottom.current.classList.add("line__bottom--deactive");
    }
    const handleClick = () => {
        if (!isActive) {
            addActiveClasses();
            dialog.current.showModal();

        } else {
            addDeactiveClasses();
        }
        setIsActive(!isActive);
    };
    const handleClickClone = () => {
        dialog.current.close();
        button.current.click();
    }
    useEffect(() => {
        window.addEventListener("resize", handleResize);
        dialog.current.style.paddingLeft = `${anchorLink.current.getBoundingClientRect().left}px`;
        buttonClone.current.style.left = `${button.current.getBoundingClientRect().left}px`;
    }, []);
    return (
        <header className="heading__Main">
            <nav className="nav">
                <a className="a__name" href="/" ref={anchorLink}>Carlos Arbizu</a>
                <button className="button__mobile" ref={button} onClick={handleClick} aria-hidden={isActive} aria-label="open the mobile nav menu">
                    <svg ref={svg} xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 16" fill="none">
                        <path ref={lineTop} className="line" d="M2 2H24.4" stroke="black" stroke-width="3" stroke-linecap="round" />
                        <path ref={lineBottom} className="line" d="M24.4 14.4H2" stroke="black" stroke-width="3" stroke-linecap="round" />
                    </svg>
                </button>
                <dialog className="dialog__main" ref={dialog}>
                    <ul className="ul__navDialog">
                        <li className="li__nav"><a className="a__nav" href="">About</a></li>
                        <li className="li__nav"><a className="a__nav" href="">Projects</a></li>
                        <li className="li__nav"><a className="a__nav" href="">Posts</a></li>
                    </ul>
                    <button ref={buttonClone} onClick={handleClickClone} aria-hidden={!isActive} aria-label="close the mobile nav menu" class="button__mobileClone"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 16" fill="none"><path d="M2 2H24.4" stroke="black" stroke-width="3" stroke-linecap="round" class="line line__top--active"></path><path d="M24.4 14.4H2" stroke="black" stroke-width="3" stroke-linecap="round" class="line line__bottom--active"></path></svg></button>
                </dialog>
                <ul className="ul__nav--hidden">
                    <li className="li__nav"><a className="a__nav" href="">About</a></li>
                    <li className="li__nav"><a className="a__nav" href="">Projects</a></li>
                    <li className="li__nav"><a className="a__nav" href="">Posts</a></li>
                </ul>
                <ul className="ul__navIcons--hidden">
                    <li>
                        <img className="img__logo" src={LinkedInLogo}/>
                    </li>
                    <li>
                    <img className="img__logo" src={GithubLogo}/>
                    </li>
                </ul>
            </nav>
            <h1 className="h1__large">Portfolio</h1>
            <h2 className="h2__animate">Frontend Developer</h2>
        </header>
    );
}

export default Introduction;
