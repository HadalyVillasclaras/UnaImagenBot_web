function parallax(){
    shine1.style.top = -(window.pageYOffset/2)+"px";
    shine1.style.right = -(window.pageYOffset/1)+"px";

    shine2.style.right = -(window.pageYOffset/10)+"px";

    shine2.style.top = -(window.pageYOffset/2)+"px";
    shine3.style.top = -(window.pageYOffset/5)+"px";
}

function start(){
    shine1 = document.querySelector("#shine1");
    shine2 = document.querySelector("#shine2");
    shine3 = document.querySelector("#shine3");
}

window.addEventListener("scroll", parallax);
window.addEventListener("load", start);