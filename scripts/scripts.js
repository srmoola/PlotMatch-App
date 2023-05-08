


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

