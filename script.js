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

gsap.from(".page10 img", {
  opacity: 0,
  scale: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".page10 img",
    scrollr: "body",
    start: "top 90%",
    end: "top 40%",
    scrub: true,
  },
});

gsap.from(".page11 img", {
  opacity: 0,
  y: -700,
  duration: 1.1,
  scrollTrigger: {
    trigger: ".page11 img",
    scroller: "body",
    start: "top 20%",
    end: "bottom 10%",
    scrub: true,
  },
});

gsap.from(".page12 img", {
  opacity: 0,
  x: 800,
  duration: 2.9,
  scrollTrigger: {
    trigger: ".page12 img",
    scroller: "body",
    start: "top 80%",
    end: "top 50%",
    scrub: true,
  },
});

gsap.from(".page13 img", {
  opacity: 0,
  x: -900,
  duration: 2,
  scrollTrigger: {
    trigger: ".page13 img",
    scroller: "body",
    start: "top 70%",
    end: "top 48%",
    scrub: true,
  },
});
gsap.from(".page14 img", {
  opacity: 0,
  x: 900,
  duration: 1.7,
  scrollTrigger: {
    trigger: ".page14 img",
    scroller: "body",
    start: "top 65%",
    end: "top 30%",
    scrub: true,
  },
});
gsap.from(".page15 img", {
  opacity: 0,
  x: -1000,
  duration: 2.5,
  scrollTrigger: {
    trigger: ".page15 img",
    scroller: "body",
    start: "top 75%",
    end: "top 35%",
    scrub: true,
  },
});

gsap.from(".trigger img", {
  opacity: 0,
  y: 500,
  duration: 1.5,
  stagger: 0.5,
  scrollTrigger: {
    trigger: ".trigger img",
    scroller: "body",
    start: "top 90%",
    end: "top 60%",
    scrub: true,
  },
});

let path = "M 10 100 Q 500 100 1000 100";
let finalpath = "M 10 100 Q 500 100 1000 100";

let svg = document.querySelector("#svgBox");

svg.addEventListener("mousemove", function (dets) {
  path = `M 10 100 Q ${dets.x} ${dets.y} 1000 100`;
  gsap.to("svg path", {
    attr: { d: path },
    duration: 0.8,
    ease: "power2.out",
  });
});

svg.addEventListener("mouseleave", function (dets) {
  finalpath = "M 10 100 Q 500 100 1000 100";
  gsap.to("svg path", {
    attr: { d: finalpath },
    duration: 1.5,
    ease: "elastic.out(1,0.1)",
  });
});

let cursor = document.querySelector("#cursor");
let img1 = document.querySelector("#img1");
let img2 = document.querySelector("#img2");
let img3 = document.querySelector("#img3");
let img4 = document.querySelector("#img4");
document.querySelector("body").addEventListener("mousemove", function (dets) {
  gsap.to(cursor, {
    x: dets.x,
    y: dets.y,
    duration: 0.6,
    ease: "elastic.out(1,0.3)",
  });
});

img1.addEventListener("mouseenter", () => {
  cursor.innerText = "view more";
  // cursor.style.fontSize = "8px";
  gsap.to(cursor, {
    scale: 2,
    duration: 0.5,
  });
});

img1.addEventListener("mouseleave", () => {
  cursor.innerText = "";
  gsap.to(cursor, {
    scale: 1,
    duration: 0.5,
  });
});

img2.addEventListener("mouseenter", () => {
  cursor.innerText = "view more";
  gsap.to(cursor, {
    scale: 4,
    ease: "power3.out",
    duration: 0.4,
  });
});

img2.addEventListener("mouseleave", () => {
  cursor.innerText = "";
  gsap.to(cursor, {
    scale: 1,
    duration: 0.3,
    ease: "power3.out",
  });
});

img3.addEventListener("mouseenter", function () {
  cursor.innerText = "view more";
  gsap.to(cursor, {
    scale: 3,
    duration: 0.6,
    ease: "bounce.out",
  });
});

img3.addEventListener("mouseleave", function () {
  cursor.innerText = "";
  gsap.to(cursor, {
    scale: 1,
    duration: 0.3,
  });
});

img4.addEventListener("mouseenter", function () {
  cursor.innerText = "view more";
  gsap.to(cursor, {
    scale: 2,
    duration: 0.4,
    ease: "back.out(1.7)",
  });
});

img4.addEventListener("mouseleave", () => {
  cursor.innerText = "";
  gsap.to(cursor, {
    scale: 1,
    duration: 1,
  });
});
