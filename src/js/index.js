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



//Theme mode
let themeMode = 'light';
const button = document.getElementById("theme-toggle");

let defaultMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
themeMode = localStorage.getItem('theme') || (defaultMode ? "dark" : "light"); 

//set css data
document.documentElement.setAttribute('data-theme', themeMode); 

const switchButton = () => {
    themeMode === "light" 
    ?
        document.getElementById("moon-icon").style.display = "block"
    :
        document.getElementById("sun-icon").style.display = "block"
}

switchButton(); 

button.addEventListener("click", () => {
    let newTheme = themeMode === "light" ? "dark" : "light";
    localStorage.setItem('theme', newTheme);
    switchButton();

    window.location.reload();
});
