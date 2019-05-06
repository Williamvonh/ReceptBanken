$(document).ready(function(){

    var count = 0;
    var images = ["images/bg1.jpeg", "images/bg2.jpg","images/bg3.jpg","images/bg4.jpg","images/bg5.jpg"];
    var image = $(".background");
    
  
    image.css("background-image","url("+images[count]+")");
  
    setInterval(function(){
      image.fadeOut(500, function(){
        image.css("background-image","url("+images[count++]+")");
        image.fadeIn(500);
      });
      if(count == images.length)
      {
        count = 0;
      }
    },5000);
  
  });
function openNav() {
    var menu = $(".sidemenu");
    menu.width("100px");
    var background = $(".background");
    background.css({marginLeft : "100px"});
    
    
  }
  

  function closeNav() {
    var menu = $(".sidemenu");
    menu.width("0");
    var background = $(".background");
    background.css({marginLeft : "0px"});
  }