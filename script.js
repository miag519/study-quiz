$(document).ready(function(){
  $("#but1").click(function(){
  	$(".answeroption").show();
    $(".answeroption").css("background-color", "#e4b4b5");
    $(".correct").css("background-color", "lightgreen");
  });
    $(".answeroption").click(function(){
    $(this).hide();
  });
    $(".correct").click(function(){
    $(this).css("background-color", "lightgreen");
  });
  
  
});