let shine1;
let shine2;
let shine3;

function parallax(){

    // let shine2css = window.getComputedStyle(shine2);
    // let shine2Left = parseInt(shine2css.getPropertyValue("left"), 10);
    // let shine2Top = parseInt(shine2css.getPropertyValue("top"), 10);


    shine1.style.top = (window.pageYOffset/3) + "px";
    shine1.style.right = - (window.pageYOffset/4) + "px";

    shine2.style.left =  - (window.pageYOffset/1) + "px";
    shine2.style.top = (window.pageYOffset/7) + "px";

    shine3.style.top = -(window.pageYOffset/5)+"px";
}

function start(){
    shine1 = document.querySelector("#shine1");
    shine2 = document.querySelector("#shine2");
    shine3 = document.querySelector("#shine3");
}

window.addEventListener("scroll", parallax);
window.addEventListener("load", start);