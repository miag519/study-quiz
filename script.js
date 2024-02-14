$(document).ready(function(){
  $("button").click(function(){
	$(this).siblings().filter(".correct").css({background": "green"});
	$(this).siblings().filter(".answeroption").css({removeClass("grey"});
  });
   $(".answeroption").click(function(){
    $(this).toggleClass("grey");
  });

 
  
  
  
});