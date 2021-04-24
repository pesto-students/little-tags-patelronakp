import React, { useEffect } from "react";
import "./styles.scss";

let slideIndex = 1;
const SlideShow = ({ children }) => {
    console.log("Slideshow load")
    useEffect(() => {
        showDivs(slideIndex);
    }, []);


    const plusDivs = (n) => {
        console.log("plusDivs", n);
        showDivs(slideIndex += n);
    }

    function showDivs(n) {
        var i;
        var x = document.getElementsByClassName("mySlides");
        if (n > x.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = x.length }
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
            x[i].classList.remove("fade-in");
        }
        x[slideIndex - 1].style.display = "block";
        x[slideIndex - 1].classList.add("fade-in");
    }


    return (
        <div className="container">
            {children}
            <button className="button display-left" onClick={() => { plusDivs(-1) }}>&#10094;</button>
            <button className="button display-right" onClick={() => { plusDivs(1) }}>&#10095;</button>
        </div >
    );

}


export default SlideShow;