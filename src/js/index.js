// to down arrow
const downArrow = document.getElementById('to-down-arrow');

function toDownArrow() {
    let clientHeight = document.documentElement.clientHeight;
    let scrollDown = document.documentElement.scrollTop;

    if (scrollDown > 40) {
        downArrow.classList.add("hide-to-down-arrow");
    } else {
        // downArrow.classList.remove("hide-to-down-arrow");
    }
}

window.addEventListener('scroll', toDownArrow);


//Theme mode
// let themeMode = 'light';
// const button = document.getElementById("theme-toggle");

// let defaultMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
// themeMode = localStorage.getItem('theme') || (defaultMode ? "dark" : "light"); 

// //set css data
// document.documentElement.setAttribute('data-theme', themeMode); 

// const switchButton = () => {
//     themeMode === "light" 
//     ?
//         document.getElementById("moon-icon").style.display = "block"
//     :
//         document.getElementById("sun-icon").style.display = "block"
// }

// switchButton(); 

// button.addEventListener("click", () => {
//     let newTheme = themeMode === "light" ? "dark" : "light";
//     localStorage.setItem('theme', newTheme);
//     switchButton();

//     window.location.reload();
// });
