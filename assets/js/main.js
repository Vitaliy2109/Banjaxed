function fireActive() {
        document.getElementById("forest-wrap").classList.toggle("active");
        document.getElementById("branch-wrap").classList.toggle("animate__shakeX");
        document.getElementById("box").classList.toggle("animate__zoomOutLeft");
        document.getElementById("click").classList.toggle("static");
        
        setTimeout(function(){
        document.getElementById("leaf-3").classList.toggle("animate__rollOut-leaf-3");
        }, 470)
         setTimeout(function(){
        
        document.getElementById("leaf-1").classList.toggle("animate__rollOut");
        }, 670)
        setTimeout(function(){
        document.getElementById("leaf-2").classList.toggle("animate__hinge");
        }, 800)
      }
function scaleimages(id) {
  document.getElementById(id).classList.toggle("active");
  document.getElementById("bg").classList.toggle("active");
 
}      
