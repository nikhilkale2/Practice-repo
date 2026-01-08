const mm = gsap.matchMedia();

mm.add("(max-width: 768px)", () => {
  let el = gsap.timeline({ paused: true });

  el.to(".links", {
    left: 0,
    duration: 0.5,
  });

  el.from(".links li", {
    x: -70,
    opacity: 0,
    duration: 0.3,
    stagger: 0.2,
  });

  el.from(".icons i", {
    x: -60,
    opacity: 0,
    duration: 0.3,
    stagger: 0.3,
  });

  el.from("#close i", {
    x: -60,
    opacity: 0,
    duration: 0.5,
  });

  document.querySelector("#menu").addEventListener("click", () => {
    el.play();
  });

  document.querySelector("#close i").addEventListener("click", () => {
    el.reverse();
  });

  // cleanup (important)
  return () => {
    el.kill();
  };
});

mm.add("(min-width: 769px) and (max-width: 1024px)", () => {
  let el = gsap.timeline();
  el.from(".links li", {
    opacity: 0,
    duration: 0.6,
    stagger: 0.3,
    y: -150,
  });
  el.from(".icons i", {
    y: -100,
    opacity: 0,
    duration: 0.6,
    stagger: 0.5,
  });
});

mm.add("(min-width:1024px)", () => {
  let el = gsap.timeline();
  el.from(".links li", {
    x: 150,
    opacity: 0,
    stagger: 0.25,
    duration: 0.5,
  });
});
