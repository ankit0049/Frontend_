function init() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });


    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();

}

init()    

var crsr = document.querySelector(".crsr")
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x + 20+"px"
    crsr.style.top = dets.y + 20+"px"
}) 

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true, 
    grabCursor: true, 
    loop: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });  

  var tl = gsap.timeline()

  tl.from(".part1 ul>li, .part2 ul>li ,.part3 button", {
    y:-100, 
    opacity:0,
    stagger:0.2,
    duration :1.5,
  });
  tl.from(".hero .image1",{
    x:-100, 
    opacity:0, 
    duration:0.9
  },"anime") 

  tl.from(".hero>.image2",
  {
     x:400,
     opacity:0, 
     duration:0.9
  },"anime")  

  
  tl.from(".hero>.image3",
  {
     y:400,
     opacity:0, 
     duration:0.9
  },"anime") 
 

  var tl2 = gsap.timeline(
    {
      scrollTrigger:{
        trigger:".page2",
        scroller:".main",
        start:"top 46%",
        end:"bottom top" , 
      
       
      }
    }
  ) ;
  
  tl2.from(".detail-part",{
    opacity:0,
    x:600,
    duration:2,
    
  },"one")

  tl2.from(".image-part",{
    opacity:0,
    x:-100, 
    duration:2,
    
  },"one") 
 

  
  var tl3 = gsap.timeline(
    {
      scrollTrigger:{
        trigger:".page2 .detail-part",
        scroller:".main",
        start:"top 42%",
        end:"bottom top" , 
        scrub:1,
       
      }
    }
  ) ;
  
  tl3.from(".subsection .box", {
    stagger:0.1,
    opacity:0, 
    y:600
  },"one") 

  var tl4 = gsap.timeline(
    {
      scrollTrigger:{
        trigger:".page3",
        scroller:".main",
        start:"top 25%",
        end:"bottom top" , 
      
      }
    }
  ) ; 

  tl4.from(".page3 .swiper",{ 
    opacity:0,
    y:400

  })
   

  

var boxes = document.querySelectorAll("h2")
boxes.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        var att = elem.getAttribute("data-image")
        crsr.style.width = "370px"
        crsr.style.height = "370px"
        crsr.style.borderRadius = "50%"
        crsr.style.backgroundImage = `url(${att})`
    })
    elem.addEventListener("mouseleave",function(){
        elem.style.backgroundColor = "transparent"
        crsr.style.width = "20px"
        crsr.style.height = "20px"
        crsr.style.borderRadius = "50%"
        crsr.style.backgroundImage = `none`
    })
})