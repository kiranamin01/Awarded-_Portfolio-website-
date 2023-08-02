
var timeout;

const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  
    function firstPageAnimation(){
      var t1 = gsap.timeline();
  
      t1.from("#nav", {
          y: -10,
          opacity : 0,
          duration : 1.5,
          ease: Expo.easeInOut,
      })
      .to(".hero__heading-hide-effect_elem",{
          y: 0,
          ease : Expo.easeInOut,
          stagger :0.2,
          delay : -1,
          duration : 2,
      })
      .from ("#hero__footer",{
          y : -10,
          opacity : 0,
          duration : 1.5,
          delay : -1,
          ease : Expo.easeInOut
      })
}  

function circleMouseFlat () {

    var xscale = 1;
    var yscale = 1;
  
    var xprev = 1;
    var yprev = 1;

    window.addEventListener("mousemove", function (dets){
        clearTimeout (timeout);

        // var xdiff= dets.clientX - xprev;
        // var ydiff= dets.clientX - yprev;
        
        xscale = gsap.utils.clamp(0.8, 1.2, dets.clientX - xprev)
        yscale = gsap.utils.clamp(0.8, 1.2, dets.clientX - yprev)
        
        xprev = dets.clientX;
        yprev = dets.clientY;

        // console.log(xdiff, ydiff); 

        circleMouseFollower (xscale, yscale);

        timeout = setTimeout(function () {
            document.querySelector ("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;
        }, 1);
    });
}  

function circleMouseFollower (xscale, yscale) {
    window.addEventListener("mousemove", function (dets){
        document.querySelector ("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${dets.clientX} scale (${xscale}, ${yscale})`
    })
};

circleMouseFlat();
circleMouseFollower();
firstPageAnimation();


document.querySelectorAll(".elem").forEach(function (elem) {
    var rotate = 0;
    var diffrotate = 0;
  
    elem.addEventListener("mouseleave", function (dets) {
      gsap.to(elem.querySelector("img"), {
        opacity: 0,
        ease: Power3,
        duration: 0.5,
      });
    });
  
    elem.addEventListener("mousemove", function (dets) {
      var diff = dets.clientY - elem.getBoundingClientRect().top;
      diffrotate = dets.clientX - rotate;
      rotate = dets.clientX;
      gsap.to(elem.querySelector("img"), {
        opacity: 1,
        ease: Power3,
        top: diff,
        left: dets.clientX,
        rotate: gsap.utils.clamp(-20, 20, diffrotate * 0.5),
      });
    });
  });

  