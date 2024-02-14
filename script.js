$(document).ready(function(){
  $("button").click(function(){
    $(".answeroption").css("background-color", "white");
    $(".correct").css("background-color", "lightgreen");
  });
  
   $(".answeroption").click(function(){
    $(this).toggleClass("grey");
  });

 
  
  
  
});