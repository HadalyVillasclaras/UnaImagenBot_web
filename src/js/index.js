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



/* Theme mode. 
According to matchMedia / localStorage*/
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


////////////////////////////
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


//Scrolltimeline
// import 'https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js'; //pollyfy


//Intersection observer. showup text on scroll
const paragraphs = document.querySelectorAll('section p');

const paragraphObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("on-show", entry.isIntersecting);
        if (entry.isIntersecting) paragraphObserver.unobserve(entry.target);
    })
}, 
{
    threshold:1
});

paragraphs.forEach(paragraph => {
    paragraphObserver.observe(paragraph);
})

//Intersection observer - Lazy 



const flowerImgs = document.querySelectorAll('[data-src]');
const config = { threshold: 0 };

function preloadImage(img) {
    console.log(img)
    const src = img.getAttribute('data-src');

    if (!src) {
        return;
    }
    img.src = src;
}


let flowerObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            console.log('i am here');
            preloadImage(entry.target);
            flowerObserver.unobserve(entry.target);
        }
    });
}, config);

flowerImgs.forEach(image => {
    flowerObserver.observe(image);
})








//Intersection observer - carrousel
//https://www.smashingmagazine.com/2018/01/deferring-lazy-loading-intersection-observer-api/

const carousel = document.getElementById('carousel');

let isLeaving = false;

let carouselObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            isLeaving = true;
            entry.target.startCarousel();
        } else if (isLeaving) {
            isLeaving = false;
            entry.target.stopCarousel();
        }
    });
});

carouselObserver.observe(carousel);

//CSS
:root{
    --body-bg-color: #8ccfff;
    --text-primary: #0C044E;
    --background-opacity: 0.9;
    --h1-color: #0C044E;

    --gradient-top: linear-gradient(to bottom, #ffffff, rgba(255, 255, 255, 0));
    --gradient-bottom: linear-gradient(to top, #ffffff, rgba(255, 255, 255, 0));


}

[data-theme='dark'] {
    --text-primary: #cfd9e6;
    --body-bg-color: #001a33;
    --background-opacity: 0.1;
    
    --gradient-top: linear-gradient(to bottom, #031518, rgba(255, 255, 255, 0));
    --gradient-bottom: linear-gradient(to top, #031518, rgba(255, 255, 255, 0));
}

#theme-toggle {
    z-index: 99;
    position: fixed;
    top: 2rem;
    right: 3rem;
    background-color: transparent;
    border: none;
}

#moon-icon, #sun-icon {
    width: 30px;
    height: 30px;
    fill: var(--text-primary);
    stroke: var(--text-primary);
    display: none;
}

body {
    background-color: var(--body-bg-color);
    margin: 0;
	padding: 0;
	border: 0;
	font-size: 1.5rem;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
	vertical-align: baseline;
    color: var(--text-primary);
    scroll-behavior: smooth;
    box-sizing: border-box;
}

h1 {
    font-size: 5rem;
}

section:nth-child(odd) {
    background-color: rgba(0, 174, 255, 0.055);
}
section:nth-child(even) {
    background-color: rgba(255, 0, 149, 0.055);
}

section {
    padding: 0 15rem;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

img {
    width: 600px;
}

/* .scroll-tracker {
    position: fixed;
    inset: 0 0 auto;
    height: 0.5rem;
    background-color: var(--body-bg-color);
} */

section p {
    color: transparent;
}
.on-show{
    color: var(--text-primary);
    transform: translateY(-20px);
    transition: color 1s, transform 1s;
}

#flowers-sect img {
    margin: 5rem 0;
}


//HTML
      <section id="flowers-sect">
        <img data-src="./flowers/lilas.jpg" alt="">
        <img data-src="./flowers/margarita.jpg" alt="">
        <img data-src="./flowers/tulipan.jpg" alt="">
        <img data-src="./flowers/margaritablue.jpg" alt="">
      </section>




//INIFNITE SCROLL
const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting); //si isIntersecting true, show; si false, no
        // if (entry.isIntersecting) observer.unobserve(entry.target); //en cuanto se muestra 1 vez, deja de hacerlo.util para lazy loadin
    })
    console.log(entries)
},
{
    // root:
    threshold: 1,
    // rootMargin: "100px" 
});

const lastCardObserver = new IntersectionObserver(entries => {
    const lastCard = entries[0];
    if (!lastCard.isIntersecting) return;
    loadNewCards();
    lastCardObserver.unobserve(lastCard.target);
    lastCardObserver.observe(document.querySelector(".card:last-child"));

}, {
    rootMargin: "100px"
});

lastCardObserver.observe(document.querySelector(".card:last-child"));

cards.forEach(card => {
    observer.observe(card);

})

const cardContainer = document.querySelector(".card-container")
function loadNewCards() {
    for (let i = 0; i < 10; i++) {
        const card = document.createElement("div");
        card.textContent = "New Card";
        card.classList.add("card");
        observer.observe(card);
        cardContainer.append(card);
        
    }
}




/*
boundingClientRect: el shape del elemento actual que esperamos 
intersectionRatio: qué porcentaje del elemento está en el screen
isIntersecting: sale en pantalla?

rootMargin: permite desplazar cuando algo tiene pasar
numero positivo, la animacion empieza antes de ue entre en vw. ej: //ve cargando algo antes de que entre en escena
numero negativo, la animacion empieza despues de que entre en vw


*/

    <div class="card-container">
        <div class="card">This is the first card</div>
        <div class="card">This is a card</div>
        <div class="card">This is a card</div>
        <div class="card">This is a card</div>
        <div class="card">This is a card</div>
        <div class="card">This is a card</div>
        <div class="card">This is a card</div>
        <div class="card">This is a card</div>
        <div class="card">This is a card</div>
        <div class="card">This is a card</div>
        <div class="card">This is a card</div>
        <div class="card">This is a card</div>
        <div class="card">This is the last card</div>
    </div>






