//Show sections on scroll
const hiddenSects = document.querySelectorAll('.hidden');

const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("on-show", entry.isIntersecting);
        // if (entry.isIntersecting) sectionObserver.unobserve(entry.target);
    })
},
{
    threshold:0.3
})

hiddenSects.forEach(hidden => {
    sectionObserver.observe(hidden);
});

//Move slideshow arrows on view
const slideshowSection = document.querySelector('#tb2');
const slideLeftArrow = document.querySelector('.slide-boton:nth-child(1)');
const slideRightArrow = document.querySelector('.slide-boton:nth-child(2)');

const slideshowObserver = new IntersectionObserver(entry => {
    if (entry[0].isIntersecting) slideLeftArrow.classList.toggle('move-slide-left-arrow');
    if (entry[0].isIntersecting) slideRightArrow.classList.toggle('move-slide-right-arrow');
},
{
    threshold: 0.8
});

slideshowObserver.observe(slideshowSection);