$(document).ready(function(){
    var num = $(".navbar-attorney").offset().top; 
    $(window).bind('scroll', function() { 
      if ($(window).scrollTop() > num) {  
        $('.navbar-attorney').addClass('fixed');  
      } 
      else {  
       $('.navbar-attorney').removeClass('fixed');    
      } 
    });
  });