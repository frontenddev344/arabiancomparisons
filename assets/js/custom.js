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









  $(document).ready(function() {
    // Configure/customize these variables.
    var showChar = 360;  // How many characters are shown by default
    var ellipsestext = "";
    
    var moretext = "View More";
    var lesstext = "View Less";

    $('.more').each(function() {
        var content = $(this).html();
 
        if(content.length > showChar) {
 
            var c = content.substr(0, showChar);
            var h = content.substr(showChar, content.length - showChar);
 
            var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';
 
            $(this).html(html);
        }
 
    });
 
    $(".morelink").click(function(){
        if($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });
});
