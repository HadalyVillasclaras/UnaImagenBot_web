//Show sections on scroll
const hiddenSects = document.querySelectorAll('.hidden');

const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("on-show", entry.isIntersecting);
        if (entry.isIntersecting) sectionObserver.unobserve(entry.target);
    })
},
{
    threshold:0.5
})

hiddenSects.forEach(hidden => {
    sectionObserver.observe(hidden);
});

//Lazy loading images
function preloadImages(img){
    const src = img.getAttribute('data-src');

    if (!src) {
        return
    }

    img.src = src;
}

function preloadBackgrounds(img){
    const src = img.getAttribute('data-bg-src');
    console.log(img);
    if (!src) {
        return //return plain bg?
    }

    let imgUrl = 'url(' + './' + src + ')';
    img.style.backgroundImage = imgUrl;
}

const indexImgs = document.querySelectorAll('[data-src]');
const bgImgs = document.querySelectorAll('[data-bg-src]');

const indexImgsObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            console.log('lazy imggg');
            preloadImages(entry.target);
        }
    });
}, 
{
    threshold: 0
});

indexImgs.forEach(img => {
    indexImgsObserver.observe(img);
});

const bgImgsObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {

        if (entry.isIntersecting) {
            console.log('bggg');
            console.log(entry);
            preloadBackgrounds(entry.target);
            bgImgsObserver.unobserve(entry.target);
        }
    });
}, 
{
    threshold: 0
});

bgImgs.forEach(img => {
    bgImgsObserver.observe(img);
})