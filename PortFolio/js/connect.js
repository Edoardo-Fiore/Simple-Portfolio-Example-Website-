//-------Animation for the connect page--------//
const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
//to display the text 
tl.to(".text", { y: "0%", duration: 1.5, stagger: 0.25 });
//to slide anmation 
tl.to(".slider", { y: "-100%", duration: 1.5 });
//to transition from the intro to the page 
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
//to make the nav bar slowly reappear
tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1.5 });
//----XX---Animation for the connect page----XX----//