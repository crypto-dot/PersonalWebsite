import { useEffect, useRef } from "preact/hooks";
import person from "../../assets/person.png";
import "./Introduction.css";
const Introduction = () => {
    const handleResize = () => {

    };
    const handleClick = (e) => {
        console.log(e.target);
    };  
    const buttonRef = useRef();
    useEffect(()=> {
        window.addEventListener("resize", handleResize);
    },[]);
    return (    
        <>
            <nav>
                <button onClick={handleClick} ref={buttonRef} aria-hidden="false" aria-label="open the mobile nav menu">

                </button>
                <ul>
                    <li><a href="">About</a></li>
                    <li><a href="">Projects</a></li>
                    <li><a href="">Posts</a></li>
                </ul>
            </nav>
            <heading>
                <h1>Portfolio</h1>
            </heading>
        </>
    );
}

export default Introduction