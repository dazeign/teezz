gsap.from(".hero", { duration: 2, x: "-100vw", ease: "power2.out" });
gsap.from(".coming-soon", {
  duration: 2,
  opacity: 0,
  delay: 3.5,
  ease: "bounce.in",
  stagger: 2,
});
gsap.from(".desc", { duration: 2, x: "100vw", delay: 2, ease: "power2.out" });
gsap.from(".form", { duration: 2, x: "-100vw", delay: 2, ease: "power2.out" });
gsap.from(".notify", {
  duration: 2,
  opacity: 0,
  delay: 2,
  ease: "bounce.in",
  stagger: 2,
});
gsap.from(".social-flex", {
  duration: 2,
  x: "100vw",
  delay: 2,
  ease: "power4.out",
});
gsap.from(".socials a:nth-child(1)", {
  duration: 2,
  x: "-100vw",
  delay: 2,
  ease: "power4.out",
});
gsap.from(".top", {
  duration: 1,
  y: "-500%",
  ease: "bounce",
  delay: 3.8,
});
