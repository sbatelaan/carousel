
const slides = document.querySelectorAll(".slide");

slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${indx * 100}%)`;


let currentslide = 0;
const nextSlide = document.querySelector(".btn-next");

nextSlide.addEventListener("click", function () {
    currentslide++;

    slide.style.transform = `translateX(${100 * (indx - currentslide)}%)`;
});
});

const nextSlide = document.querySelector(".btn-next");

let currentslide = 0;
let maxSlide = slides.length -1;

nextSlide.addEventListener("click", function () {
    if (currentslide === maxSlide) {
        currentslide = 0;
    } else {
        currentslide++;
    }
    slides.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - currentslide)}%)`;
    });
});

const prevSlide = document.querySelector(".btn-prev");

prevSlide.addEventListener("click", function () {
    if (currentslide === 0) {
        currentslide = maxSlide;
    } else {
        currentslide--;
    }
    slides.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - currentslide)}%)`;
    });
});


