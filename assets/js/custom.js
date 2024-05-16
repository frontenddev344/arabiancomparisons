$(document).ready(function(){
    $(".toggle").click(function(){
        $("body").addClass("menuToggle");
    });
    $(".colse").click(function(){
        $("body").removeClass("menuToggle");
    });
});


$(document).ready(function(){
    $(".drop-down").click(function(){
        $(".drop-menu").addClass("show");
    });
    $(".cross").click(function(){
        $(".drop-menu").removeClass("show");
    });
});








  $(window).scroll(function(){
    if($(window).scrollTop()>=200){
        $('body').addClass('fix-header');
    }
    else{
        $('body').removeClass('fix-header');
    };
  });