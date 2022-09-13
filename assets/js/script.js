/* Author: 

*/
let slider = document.querySelector(".slider");
let slides = document.querySelectorAll(".slide");
let maxScroll = slides.length * window.innerWidth;
let currentScroll = 0;

setInterval(sliding, 2000);

function sliding() {
    currentScroll = currentScroll + window.innerWidth;
    console.log("scroll:" + slider.scrollLeft)
    console.log("currentscroll:" + currentScroll);
    if (currentScroll > maxScroll) {
        currentScroll = 0;
    }
    slider.scrollLeft = currentScroll;


}