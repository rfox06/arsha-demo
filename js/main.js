/*menu hamburguesa*/ 

document.querySelector(".bars-menu").addEventListener("click", animateBars);

var line1__bars = document.querySelector(".line1--bars-menu");
var line2__bars = document.querySelector(".line2--bars-menu");
var line3__bars = document.querySelector(".line3--bars-menu");
// var container__menu = document.querySelector(".menu")

function animateBars(){
    line1__bars.classList.toggle("activeline1--bars-menu");
    line2__bars.classList.toggle("activeline2--bars-menu");
    line3__bars.classList.toggle("activeline3--bars-menu");
    
    // container__menu.classList.toggle("menu__active")
}

/*bars menu*/

 
















