let tl = gsap.timeline;
gsap.registerPlugin(ScrollTrigger);

// gsap.to(".box_l, .box_r", {
//   scrollTrigger: {
//     trigger: ".trigger_1",
//     start: "center center",
//     end: "bottom top",
//     scrub: true
//   },
//   width:'0%', 
//   duration: 2
// });
// gsap.to(".box_t, .box_b", {
//   scrollTrigger: {
//     trigger: ".trigger_1",
//     start: "center center",
//     end: "bottom top",
//     scrub: true
//   },
//   height:'0%', 
//   duration: 2
// });


tl({
  scrollTrigger: {
    trigger: ".trigger_1",
    start: "center center",
    end: "bottom top",
    scrub: true,
    pin: true
  }
})
.to(".box_l, .box_r", {width:'0%', duration: 2})
.to(".box_t, .box_b", {height:'0%', duration: 2})
.to(".box", {display:'block', bottom:'110%', ease: "none", duration: 2})
.to(".box2", {display:'block', bottom:'70%', ease: "none", duration: 2})




