import { useEffect, useRef, useState } from "preact/hooks";
import person from "../../assets/person.png";
import "./Introduction.scss";
const Introduction = () => {
    const svg = useRef();
    const button = useRef();
    const buttonClone = useRef();
    const lineTop = useRef();
    const lineBottom = useRef();
    const dialog = useRef();
    const [isActive, setIsActive] = useState(false);
    const handleResize = () => {

    };
    const handleClick = () => {
        if(!isActive) {
            lineTop.current.classList.add("line__top--active");
            lineBottom.current.classList.add("line__bottom--active");
            lineBottom.current.classList.remove("line__bottom--deactive");
            lineTop.current.classList.remove("line__top--deactive");
            dialog.current.showModal();
        } else {
            lineTop.current.classList.remove("line__top--active");
            lineBottom.current.classList.remove("line__bottom--active");
            lineTop.current.classList.add("line__top--deactive");
            lineBottom.current.classList.add("line__bottom--deactive");
        }
        setIsActive(!isActive);
    };  
    const handleClickClone = () => {
        dialog.current.close();
        button.current.click();
    }
    useEffect(()=> {
        window.addEventListener("resize", handleResize);
    },[]);
    return (    
        <>
            <nav className="nav">
                <h2 className="h2__name">Carlos Arbizu</h2>
                <dialog className="dialog__main" ref={dialog}>                
                    <ul className="ul__nav">
                    <li className="li__nav"><a className="a__nav" href="">About</a></li>
                    <li className="li__nav"><a className="a__nav" href="">Projects</a></li>
                    <li className="li__nav"><a className="a__nav" href="">Posts</a></li>
                </ul>
                <button ref={buttonClone} onClick={handleClickClone} aria-hidden="true" aria-label="open the mobile nav menu" class="button__mobileClone"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 16" fill="none"><path d="M2 2H24.4" stroke="black" stroke-width="3" stroke-linecap="round" class="line line__top--active"></path><path d="M24.4 14.4H2" stroke="black" stroke-width="3" stroke-linecap="round" class="line line__bottom--active"></path></svg></button>
                </dialog>
                <button className="button__mobile" ref={button} onClick={handleClick} aria-hidden={isActive} aria-label="open the mobile nav menu">
                <svg ref={svg} xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 16" fill="none">
                    <path ref={lineTop} className="line" d="M2 2H24.4" stroke="black" stroke-width="3" stroke-linecap="round"/>
                    <path ref={lineBottom} className="line" d="M24.4 14.4H2" stroke="black" stroke-width="3" stroke-linecap="round"/>
                </svg>
                </button>
            </nav>
            <header className="heading__Main">
                <h1 className="h1">Portfolio</h1>
                <h2 className="h2__animate">Frontend Developer</h2>
            </header>
        </>
    );
}

export default Introduction;
