let crsr = document.querySelector(".cursor");
let blur = document.querySelector(".cursor-blur");

document.addEventListener("mousemove",(pos)=>{
    crsr.style.left = pos.x-10+"px";
    crsr.style.top = pos.y-10+"px";
    blur.style.left = pos.x-35+"px";
    blur.style.top = pos.y-40+"px";
});



gsap.to(".header", {
    height:"90px",
    backgroundColor: "red",
    duration: 0.5,
    scrollTrigger: {
      trigger: ".header",
      scroller: "body",
      // markers:true,
      start: "top -10%",
      end: "top -11%",
      scrub: 1,
    },
  });



  gsap.to(".main", {
    backgroundColor: "#fafafa",
    scrollTrigger: {
      trigger: ".main",
      scroller: "body",
      // markers: true,
      start: "top -25%",
      end: "top -70%",
      scrub: 3,
    },
  });

