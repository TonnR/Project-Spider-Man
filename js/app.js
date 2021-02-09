document.addEventListener('DOMContentLoaded', () =>{
    let tl = new TimelineMax();

    tl.fromTo('.bg-loader', 1 ,
    {width: '100%'}, 
    {width: '0%', delay: 3, ease: Expo.easeInOut})

    .fromTo('.bg-video', 2 ,
    {width: '0%', opacity:0}, 
    {width: '100%', opacity: 1, ease: Expo.easeInOut}, '-=1')

    .fromTo('.logo', 0.1 ,
    {y: 50, opacity:0}, 
    {y: 0, opacity: 1, ease: Expo.easeInOut}, '-=0.1')

    .fromTo('.nav__list', 0.2 ,
    {y: 50, opacity:0}, 
    {y: 0, opacity: 1, ease: Expo.easeInOut}, '-=0.1')

    .fromTo('.nav__social', 0.2 ,
    {y: 50, opacity:0}, 
    {y: 0, opacity: 1, ease: Expo.easeInOut}, '-=0.1')

    .fromTo('.spider', 0.3 ,
    {y: -50, opacity:0}, 
    {y: 0, opacity: 1, ease: Expo.easeInOut}, '-=0.1')

    .fromTo('.item-1', 0.3 ,
    {y: -50, opacity:0}, 
    {y: 0, opacity: 1, ease: Expo.easeInOut}, '-=0.1')

    .fromTo('.item-2', 0.3 ,
    {y: -50, opacity:0}, 
    {y: 0, opacity: 1, ease: Expo.easeInOut}, '-=0.1')

    .fromTo('.buttons', 0.4 ,
    {y: -50, opacity:0}, 
    {y: 0, opacity: 1, ease: Expo.easeInOut}, '-=0.1')

    .fromTo('.flex', 0.4 ,
    {y: -50, opacity:0}, 
    {y: 0, opacity: 1, ease: Expo.easeInOut}, '-=0.1')
});