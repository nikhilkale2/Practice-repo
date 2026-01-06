gsap.from(".page1 #box", {
  opacity: 0,
  y: -1000,
  rotate: 360,
  backgroundColor: "red",
  duration: 1.2,
});

gsap.from(".page2 #box", {
  opacity: 0,
  scale: 0,
  rotate: 360,
  backgroundColor: "red",
  duration: 1.2,
  scrollTrigger: {
    trigger: ".page2 #box",
    scroller: "body",
    start: "top 60%",
    end: "top 25%",
    scrub: true,
  },
});

gsap.from(".page3 #box", {
  opacity: 0,
  scale: 0,
  rotate: 360,
  backgroundColor: "red",
  duration: 1.2,
  scrollTrigger: {
    trigger: ".page3 #box",
    scroller: "body",
    scrub: true,
    start: "top 80%",
    end: "top 30%",
  },
});

gsap.from(".page4 #box", {
  opacity: 0,
  scale: 0,
  rotate: 360,
  backgroundColor: "red",
  duration: 1.2,
  scrollTrigger: {
    trigger: ".page4 #box",
    scroller: "body",
    start: "top 70%",
    end: "top 30%",
    scrub: true,
  },
});

gsap.from(".page5 img", {
  opacity: 0,
  scale: 0,
  duration: 1.4,
  scrollTrigger: {
    trigger: ".page5 img",
    scroller: "body",
    start: "top 70%",
    end: "top 40%",
    scrub: true,
  },
});

gsap.from(".page6 img", {
  opacity: 0,
  scale: 0,
  duration: 1.4,
  scrollTrigger: {
    trigger: ".page6 img",
    scroller: "body",
    start: "top 70%",
    end: "top 40%",
    scrub: true,
  },
});
gsap.from(".page7 img", {
  opacity: 0,
  scale: 0,
  duration: 1.4,
  scrollTrigger: {
    trigger: ".page7 img",
    scroller: "body",
    start: "top 70%",
    end: "top 40%",
    scrub: true,
  },
});
gsap.from(".page8 img", {
  opacity: 0,
  scale: 0,
  duration: 1.4,
  scrollTrigger: {
    trigger: ".page8 img",
    scroller: "body",
    start: "top 70%",
    end: "top 40%",
    scrub: true,
  },
});
