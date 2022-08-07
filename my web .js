$(function(){
    

    var windowheight = $(window.innerHeight()),
    upperheight=$('.upper-bar').innerHeight(),
    navbarheight=$('.nav-Bar').innerHeight();

  $('.slider,.carousel-item').height(windowheight = $(window.innerHeight()), - (upperheight + navbarheight));

   $('.option').onclick(function(){
 $('.li-item').css("visibility","hidden")
});


})

