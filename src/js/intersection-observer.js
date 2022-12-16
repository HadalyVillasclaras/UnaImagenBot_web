
let options = {
    root: null, 
    rootMargin: '-50%',
    treshold: 1.0
}


function showUp(entries) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('showup');
            console.log(entry);
            console.log('hi');
        }else {
          entry.target.classList.remove('showup');
        }
    });
}


let observer = new IntersectionObserver(showUp, options);

let target = document.querySelectorAll('.hide');
target.forEach((trgt) => observer.observe(trgt));
