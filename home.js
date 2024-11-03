
document.addEventListener('DOMContentLoaded', function() {
    console.log('Smart Home Presentation Loaded');
});
let currentIndex = 0;

function changeSlide(direction) {
    const slides = document.querySelectorAll('.carousel-slide img');
    currentIndex += direction;

 
    if (currentIndex >= slides.length) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    }

    const offset = -currentIndex * 100; 
    document.querySelector('.carousel-container').style.transform = `translateX(${offset}%)`;
}


setInterval(() => {
    changeSlide(1);
}, 5000);