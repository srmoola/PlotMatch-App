
"use strict";

// Select all slides
const slides = document.querySelectorAll(".slide");
// Loop through slides and set each slide's translateX
slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${indx * 100}%)`;
});
// Set interval to move to next slide every 3 seconds
setInterval(() => {
    // Check if current slide is the last and reset current slide
    if (curSlide === maxSlide) {
        curSlide = 0;
    } else {
        curSlide++;
    }

    // Move slide by -100%
    slides.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
    });
}, 5000);

// Current slide counter
let curSlide = 0;

// Maximum number of slides
let maxSlide = slides.length - 1;

// Select next slide button
const nextSlide = document.querySelector(".btn-next");

// Add event listener and navigation functionality
nextSlide.addEventListener("click", function () {
    // Check if current slide is the last and reset current slide
    if (curSlide === maxSlide) {
        curSlide = 0;
    } else {
        curSlide++;
    }

    // Move slide by -100%
    slides.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
    });
});

// Select previous slide button
const prevSlide = document.querySelector(".btn-prev");

// Add event listener and navigation functionality
prevSlide.addEventListener("click", function () {
    // Check if current slide is the first and reset current slide to last
    if (curSlide === 0) {
        curSlide = maxSlide;
    } else {
        curSlide--;
    }

    // Move slide by 100%
    slides.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
    });
});



// CONTAINER's
gsap.from('.left_container', {
    delay:1,
    duration:3,
    top:"100%",
    ease:"expo.inOut"
});

gsap.from('.right_container', {
    delay:1,
    duration:3,
    bottom:"100%",
    ease:"expo.inOut"
});

gsap.from('.left_strip', {
    delay:6,
    duration:5,
    top:"100%",
    ease:"expo.inOut"
});

gsap.from('.right_strip', {
    delay:6,
    duration:5,
    bottom:"100%",
    ease:"expo.inOut"
});

// NAV-ITEM
gsap.from('.nav__item', {
    opacity:0,
    delay:4,
    duration:2,
    y:100,
    ease:"expo.Out",
    stagger:0.3
});

// SOCIAL-ITEM
gsap.from('.social_item', {
    opacity:0,
    delay:4,
    duration:2,
    y:100,
    ease:"expo.Out",
    stagger:0.3
});

// PRODUCT-TTTLE
gsap.from('.product_title', {
    opacity:0,
    delay:5,
    duration:3,
    y:100,
    ease:"expo.inOut",
});
// PRODUCT-TYPE
gsap.from('.product_type', {
    opacity:0,
    delay:5.8,
    duration:3,
    y:100,
    ease:"expo.inOut",
});

// OVERLAY
gsap.to('.first', {
    delay:.5,
    duration:2,
    top:"-100%",
    ease:"expo.inOut"
});
gsap.to('.second', {
    delay:.5,
    duration:2,
    top:"-100%",
    ease:"expo.inOut"
});
gsap.to('.third', {
    delay:.5,
    duration:1,
    top:"-100%",
    ease:"expo.inOut"
});



const element = document.getElementById('slider');

// Set a timer for 3 seconds (3000 milliseconds)
setTimeout(() => {
    element.style.display = 'block';
}, 6000);

