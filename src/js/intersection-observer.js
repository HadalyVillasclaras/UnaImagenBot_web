
const hiddenSects = document.querySelectorAll('.hidden');

const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        console.log(entry.target);
        entry.target.classList.toggle("on-show", entry.isIntersecting);
        // if (entry.isIntersecting) sectionObserver.unobserve(entry.target);
    })
},
{
    threshold:0.5
})

hiddenSects.forEach(hidden => {
    sectionObserver.observe(hidden);
});

