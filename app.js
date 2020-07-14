gsap.from(".hero", { duration: 2, x: "-100vw", delay: 1, ease: "power2.out" });
gsap.from(".coming-soon", {
  duration: 2,
  opacity: 0,
  delay: 1.5,
  ease: "bounce.in",
  stagger: 2,
});
gsap.from(".desc", {
  duration: 1.5,
  opacity: 0,
  delay: 1.5,
});
gsap.from(".top", { duration: 1, y: "-100%", ease: "bounce" });
