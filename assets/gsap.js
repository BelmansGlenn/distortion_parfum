import gsap from "gsap";

let tl = gsap.timeline();
gsap.from("body", {overflowY: "hidden", duration: 5, clearProps: "all"});
gsap.from(".navbar", {delay: 1.1, xPercent: 100, opacity:0, duration: 3, ease: "easeIn"});
gsap.from(".media a", {delay: 1.1, opacity:0, duration: 5, ease: "linear"});
tl.to(".overlay", {delay:0.5, xPercent: 100, stagger:0.4, duration:1.5, ease: "linear"});
tl.from(".timeline", {y:100, opacity:0, stagger:0.4, duration: 1, ease: "easeIn"});
tl.from(".sponsor",{yPercent:100, opacity:0, duration: 0.5, ease:"back"});
tl.from(".distortion",{opacity:0, duration: 2.5, ease:"bounce"});
