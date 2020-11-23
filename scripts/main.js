let tl = gsap.timeline;
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

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


tl({
  scrollTrigger: {
    trigger: ".box",
    start: "center center",
    end: "300% top",
    scrub: true,
    pin: true,
    markers: false
  }
})
  .to(".showtxt_1", { text: "ในการแข่งขันที่", ease: "none" }, 1)
  .to(".showtxt_2", { text: " ทุกคนเริ่มต้นจากจุดเดียวกัน แต่ในโลกความ", ease: "none" }, 1)
  .to(".showtxt_3", { text: "เป็นจริง บางคนมีต้นทุนชีวิตที่ดี ก็เสมือนเข้าใกล้", ease: "none" }, 1)
  .to(".showtxt_4", { text: "มากกว่าคน", ease: "none" }, 1)
  .to(".showtxt_5", { text: "ที่มี", ease: "none" }, 1)
  .to(".showtxt_6", { text: "ที่จํากัด ถึงแม้ว่าสิ่งนี้จะไม่ใช่เครื่องการันตีความสําเร็จ", ease: "none" }, 1)
  .to(".showtxt_7", { text: "แต่", ease: "none" }, 1)
  .to(".showtxt_8", { text: "ตรงนี้ทําให้เราเห็นปัญหาหนึ่งอย่างชัดเจน นั่นคือ", ease: "none" }, 1)
  .to(".showtxt_9", { display: "block", text: "ความเหลื่อมล้ำทางการศึกษา", ease: "none", padding: "15px 40px 0px 40px", marginTop: "25px" }, 1)
  .to(".keyword", { background: "#fff" }, 2)
  .to(".hl", { background: "#dcfb00" }, 2)
  .to(".logo, .txt_hl", { display: 'block' },1);


tl({
  scrollTrigger: {
    trigger: ".trigger_1",
    start: "bottom bottom",
    end: "250% top",
    markers: false,
    scrub: true,
    pin: true
  }
})
  .to(".box_l, .box_r", { width: '0%', duration: 1 },1)
  .to(".box_t, .box_b", { height: '0%', duration: 1},1);


tl({
  scrollTrigger: {
    trigger: ".trigger_2",
    start: "bottom bottom",
    end: "250% top",
    markers: false,
    scrub: true,
    pin: true
  }
})
  .to(".box_l, .box_r", { width: '0%', duration: 1 }, 1)
  .to(".box_t, .box_b", { height: '0%', duration: 1 }, 1);


tl({
  scrollTrigger: {
    trigger: ".chap1_1",
    start: "top bottom",
    end: "bottom top",
    markers: false,
    scrub: true
  }
})
  .to(".chap1_txtbox", { text: "ตรงนี้ทําให้เราเห็นปัญหาหนึ่งอย่างชัดเจน นั่นคือ", ease: "none", duration:1});
tl({
  scrollTrigger: {
    trigger: ".chap1_2",
    start: "top bottom",
    end: "top top",
    markers: true,
    scrub: true
  }
})
  .to(".chap1_txtbox", { text: "ตรงนี้ทําให้เราเห็นปัญหาหนึ่งอย่างชัดเจน นั่นคือ", ease: "none", duration: 1 })
  .to(".r1, .r2", { background: '#d9d9d8', duration: 1 },1)
  .to(".ppun_effect", { opacity: 1, duration: 1 },0);

  tl({
  scrollTrigger: {
    trigger: ".chap1_3",
    start: "top bottom",
    end: "bottom top",
    markers: false,
    scrub: true
  }
})
  .to(".chap1_txtbox", { text: "ตรงนี้ทําให้เราเห็นปัญหาหนึ่งอย่างชัดเจน นั่นคือ", ease: "none", duration: 1 })
  .to(".ppun_effect", { opacity: 0, duration: 1 });

