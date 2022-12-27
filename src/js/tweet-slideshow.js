//Tweets slider
let currentImg = 0;
let slideImages = document.getElementsByClassName("slide-img");
let sliderImage = document.getElementsByClassName("slide-imgs");




function changeSlide(toImage) {
    if (toImage >= (slideImages.length) ){toImage = 0;}
    if (toImage < 0) {toImage = slideImages.length-1;}
    

    slideImages[currentImg].classList.toggle("active");

    slideImages[toImage].classList.toggle("active");

    currentImg = toImage;
}

const prevButton = document.getElementById('prev-tweet');
const nextButton = document.getElementById('next-tweet');

prevButton.addEventListener('click', function(){
    changeSlide(currentImg - 1);
});

nextButton.addEventListener('click', function(){
    changeSlide(currentImg + 1);
});

document.addEventListener("touchstart", (e) => {
});

document.addEventListener("touchmove", (e) => {
});

document.addEventListener("touchend", (e) => {
});