import { useEffect, useRef } from "preact/hooks";
import person from "../../assets/person.png";
import "./Introduction.scss";
const Introduction = () => {
    const svg = useRef();
    const button = useRef();
    const handleResize = () => {

    };
    const handleClick = () => {
        svg.current.classList.add("animate");

    };  
    useEffect(()=> {
        window.addEventListener("resize", handleResize);
    },[]);
    return (    
        <>
            <nav className="nav">
                <h2 className="h2__name">Carlos Arbizu</h2>
                <button className="button__mobile" ref={button} onClick={handleClick} aria-hidden="false" aria-label="open the mobile nav menu">
                <svg ref={svg} xmlns="http://www.w3.org/2000/svg" width="26" height="16" viewBox="0 0 26 16" fill="none">
                    <path d="M2 2H24.4" stroke="black" stroke-width="3" stroke-linecap="round"/>
                    <path d="M24.4 14.4H2" stroke="black" stroke-width="3" stroke-linecap="round"/>
                </svg>
                </button>
                <ul className="ul__nav" style={"display: none"}>
                    <li className="li__nav"><a className="a__nav" href="">About</a></li>
                    <li className="li__nav"><a className="a__nav" href="">Projects</a></li>
                    <li className="li__nav"><a className="a__nav" href="">Posts</a></li>
                </ul>
            </nav>
            <header className="heading__Main">
                <h1 className="h1">Portfolio</h1>
                <h2 className="h2__animate">Frontend Developer</h2>
            </header>
        </>
    );
}

export default Introduction;
