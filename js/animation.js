let tl = new TimelineMax();

tl.fromTo('.header-logo', 1, { y: -200, opacity: 0 }, { y: 0, opacity: 1 })  
  .fromTo('.landing-header', 1, { x: 200, opacity: 0 }, { x: 0, opacity: 1 })
  .fromTo('.landing-header__small', 1, { x: -200, opacity: 0 }, { x: 0, opacity: 1 })
  .staggerFromTo(
    '.nav-item',
    0.9,
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0 },
    0.05
  )
;
