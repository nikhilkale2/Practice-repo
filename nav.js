let el = gsap.timeline();

el.to(".links", {
  left: 0,
  duration: 0.5,
});
el.from("li", {
  x: -70,
  duration: 0.3,
  stagger: 0.2,
  opacity: 0,
});
el.from(".icons i", {
  x: -60,
  duration: 0.3,
  stagger: 0.3,
  opacity: 0,
});
el.from("#close i", {
  x: -60,
  duration: 0.9,
  opacity: 0,
});

el.pause();

document.querySelector("#menu").addEventListener("click", function () {
  el.play();
});

document.querySelector("#close i").addEventListener("click", function () {
  el.reverse();
});
