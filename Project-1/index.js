function load()
{

}
load();

 var main = document.querySelector("#main"); 
 var image = document.querySelector("#page>img");

 main.addEventListener("mousemove", function(dets){ 
    image.style.top = 1-dets.y * 0.05 + "px";
    image.style.left =1- dets.x*0.05 +"px";


 }); 

 var tl = gsap.timeline();
 tl.from("#nav , #L-1 ,#hl" ,{ 
    
    y:-100,
    duration:1, 
    opacity:0,
    delay:1 ,
   stagger : 0.6

 }); 

 

var elementsToAnimate = ["#page1 h1", "#page1 h5", "#page1 h6"];

elementsToAnimate.forEach(elementSelector => {
  gsap.from(elementSelector, {
    opacity: 0,
    x: -50,
    duration: 1,
    scrollTrigger: {
      trigger: elementSelector,
      start: "top 80%", 
      end: "top 20%", 
   
    
    }
  });
});   

var p3 = ["#page2 #image-1" ,"#page2 #image-2"];

p3.forEach(para => {
   gsap.from(para,{
   
      opacity:0, 
      x:-50,
      duration:1,
      scrollTrigger: {
         trigger: para,
         start: "top 80%", 
         end: "top 20%", 
      
       
       }
   });
  });   








 