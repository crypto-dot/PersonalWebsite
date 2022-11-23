const helloHeader = document.querySelector(".heroSectionHeading");

window.addEventListener("scroll", () => {
    const offset = window.scrollY;
    console.log(offset);
    helloHeader.style.transform = `translateY(${offset})`;
});