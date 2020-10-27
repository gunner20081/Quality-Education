let tl = gsap.timeline();
gsap.registerPlugin(ScrollTrigger);

gsap.from(".box_l, .box_r", {
  scrollTrigger: {
    trigger: ".trigger_1",
    start: "50% 40%",
    end: "100% 10%",
    scrub: true
  },
  width:'30%', 
  duration: 2
});
gsap.from(".box_t, .box_b", {
  scrollTrigger: {
        trigger: ".trigger_1",
      start: "50% 40%",
    end: "100% 10%",
    scrub: true
  },
  height:'6%', 
  duration: 2
});