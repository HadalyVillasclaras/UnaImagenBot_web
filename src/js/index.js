//Tweets slide

let slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    let x = document.getElementsByClassName("slide-img");
    if (n > x.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = x.length
    }
    for (let i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    x[slideIndex-1].style.display = "block";  
}



//DARK MODE
const toggle = document.getElementById("theme-toggle");
const defaultMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
let storedTheme = localStorage.getItem('theme') || (defaultMode ? "dark" : "light");
console.log(storedTheme);

if (storedTheme)
    document.documentElement.setAttribute('data-theme', storedTheme)

if (storedTheme === "light") {
    document.getElementById("moon-icon").style.display = "block";
} else {
    document.getElementById("sun-icon").style.display = "block";
}

toggle.onclick = function() {
    let currentTheme = document.documentElement.getAttribute("data-theme");
    let newTheme = currentTheme === "light" ? "dark" : "light";

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    

};
