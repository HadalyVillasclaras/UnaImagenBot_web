//Show sections on scroll
const hiddenSects = document.querySelectorAll('.hidden');

const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("on-show", entry.isIntersecting);
        if (entry.isIntersecting) sectionObserver.unobserve(entry.target);
    })
},
{
    threshold:0.3
})

hiddenSects.forEach(hidden => {
    sectionObserver.observe(hidden);
});


// //Lazy loading images (index imgs + bg)
function preloadImages(img){
    const src = img.getAttribute('data-src');

    if (!src) { return }

    img.src = src;
}

function preloadBackgrounds(img){
    const src = img.getAttribute('data-bg-src');
    if (!src) { return } //return plain bg?

    let imgUrl = 'url(' + './' + src + ')';
    img.style.backgroundImage = imgUrl;
}

function preloadMbBackgrounds(img){
    const src = img.getAttribute('data-bg-src-mb');
    if (!src) {
        return //return plain bg?
    }

    let imgUrl = 'url(' + './' + src + ')';
    img.style.backgroundImage = imgUrl;
}


const indexImgs = document.querySelectorAll('[data-src]');
const bgImgs = document.querySelectorAll('[data-bg-src]');
const bgImgsMb = document.querySelectorAll('[data-bg-src-mb]');


const indexImgsObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            preloadImages(entry.target);
        }
    });
}, 
{
    threshold: 0
});


const bgImgsObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            preloadBackgrounds(entry.target);
            bgImgsObserver.unobserve(entry.target);
        }
    });
}, 
{
    // rootMargin: "1080px",
    threshold: 0
});

const bgImgsMbObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            preloadMbBackgrounds(entry.target);
            bgImgsMbObserver.unobserve(entry.target);
        }
    });
}, 
{
    // rootMargin: "1080px",
    threshold: 0
});




indexImgs.forEach(img => {
    indexImgsObserver.observe(img);
});

// mediaquery 
let x = window.matchMedia("(max-width: 900px)");

if (x.matches) {
    bgImgsMb.forEach(img => {
        bgImgsMbObserver.observe(img);
    });
} else {
    bgImgs.forEach(img => {
        bgImgsObserver.observe(img);
    });
}


