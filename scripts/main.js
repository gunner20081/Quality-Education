let tl = gsap.timeline();
gsap.registerPlugin(ScrollTrigger);

gsap.timeline({
    scrollTrigger: {
      trigger: ".box",
      start: "center center",
      end: "bottom top",
      scrub: 1,
      pin: true,
      // markers: true
    }
  })
.from(".box_t",  { x: innerWidth * 1 })
.from(".box_r", { x: innerWidth * -1 })
.from(".box_l", { x: innerWidth * 1 })
.from(".box_b", { x: innerWidth * 1 })