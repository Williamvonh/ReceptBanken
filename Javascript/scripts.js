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
  var weatherbox = document.getElementsByClassName("weatherbox");
  var weathername = document.getElementsByName("GET")
 

        $(document).ready(function(){
            $.ajax({
 method: "GET",
 url: "http://api.ipstack.com/check?access_key=2a59186295c5b9eb55492715fb16a842",
 error: ajaxReturn_Error,
 success: ajaxReturn_Success
 })
 function ajaxReturn_Success(result, status, xhr) {
   var weather = document.getElementsByClassName("weathername");
   weather.innerHTML = "funkar";
 }
 function ajaxReturn_Error(result, status, xhr) {
 console.log("Ajax-api-stack: "+status);
}
        });//End ready function
        function ParseJsonFile(result) {
 var lat = result.latitude;
 var long = result.longitude;
 var city = result.city;
 var ipNbr = result.ip

 $("#city").text(city);
 $("#ipNbr").text(ipNbr);

 $.ajax({
 method: "GET",
 url:"http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+long+"&units=metric"+ "&APPID=295cd7b4e2a3edf6c673bf329db366b0",
 error: ajaxWeatherReturn_Error,
 success: ajaxWeatherReturn_Success
 })
 function ajaxWeatherReturn_Success(result, status, xhr) {
 var sunrise = result.sys.sunrise;
 var sunset = result.sys.sunset;
 var sunriseDate = new Date(sunrise*1000);
 var timeStrSunrise = sunriseDate.toLocaleTimeString();
 var sunsetDate = new Date(sunset*1000);
 var timeStrSunset = sunsetDate.toLocaleTimeString();
 $("#sunrise").text("Sunrise: "+timeStrSunrise);
 $("#sunset").text("Sunset: "+timeStrSunset);
 $("#weather").text(result.weather[0].main);
 $("#degree").text(result.main.temp+" \u2103");
 }//ajaxWeatherReturn_Success
 
 function ajaxWeatherReturn_Error(result, status, xhr) {
 alert("Error i OpenWeaterMap Ajax");
 console.log("Ajax-find movie: "+status);
 }
 }