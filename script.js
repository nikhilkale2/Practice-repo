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
  },
});

gsap.from(".page4 #box", {
  opacity: 0,
  scale: 0,
  rotate: 360,
  backgroundColor: "red",
  duration: 1.2,
});
