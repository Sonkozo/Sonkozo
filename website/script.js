
const carouselContent = document.querySelector('.carousel-content');

let scrollPosition = 0;
let scrollSpeed = 200; // 200px every 2 seconds
let scrollDuration = 2000; // 2 seconds

function animateScroll() {
    scrollPosition += scrollSpeed;
    motion.domAnimate(carouselContent, {
        x: -scrollPosition,
        transition: {
            duration: scrollDuration / 1000,
            ease: 'easeInOut'
        }
    });
    if (scrollPosition >= carouselContent.offsetWidth - window.innerWidth) {
        scrollPosition = 0;
    }
    setTimeout(animateScroll, scrollDuration);
}

animateScroll();