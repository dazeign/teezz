gsap.from(".hero, .hero-two", { duration: 2, x: "-100vw", ease: "power2.out" });
gsap.from(".coming-soon, .coming-soon-two", {
  duration: 2,
  opacity: 0,
  delay: 3.5,
  ease: "bounce.in",
  stagger: 2,
});
gsap.from(".desc, .desc-two", {
  duration: 2,
  x: "100vw",
  delay: 2,
  ease: "power2.out",
});
gsap.from(".form, .form-two", {
  duration: 2,
  x: "-100vw",
  delay: 2,
  ease: "power2.out",
});
gsap.from(".notify, .notify-two", {
  duration: 2,
  opacity: 0,
  delay: 2,
  ease: "bounce.in",
  stagger: 2,
});
gsap.from(".social-flex-two", {
  duration: 2,
  x: "100vw",
  delay: 2,
  ease: "power4.out",
});
gsap.from(".socials a:nth-child(1), .socials-two a:nth-child(1)", {
  duration: 2,
  x: "-100vw",
  delay: 2,
  ease: "power4.out",
});
gsap.from(".top, .top-two", {
  duration: 1,
  y: "-500%",
  ease: "bounce",
  delay: 3.8,
});
