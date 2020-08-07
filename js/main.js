$(function () {
    "use strict";

    var winH        = $(window).height(),
        upperBar    = $(".upper-bar").innerHeight(),
        nuvH        = $(".navbar").innerHeight();

    $(".slider, .carousel-item").height(winH - (upperBar + nuvH));

    $(".features-work ul li").on('click', function() {
        $(this).addClass("active").siblings().removeClass("active");
        if ($(this).data("class") === ".all"){
            $(".features-work img").css('opacity', 1)
        }
        else{
            $(".features-work img").css('opacity', '.2');
            $($(this).data("class")).css("opacity", 1);
            
        }
    });
    
    // var myicon = document.createElement("<i class='fa fa-home fa-5x'></i>");

    $(".footer .helpful-links ul li").prepend('<i class="fas fa-angle-right"></i>');

    $(".statis span").counterUp({
        delay: 10,
        time: 1000
    });

    $(".img-choose").innerHeight($(".inner-choose").innerHeight());

    
        
    

});
// $(window).on("load",function()
// {        
//     $(".loading-overlay").fadeOut(100);

// })
$(function () {
    $(".loading-over").fadeOut(1000);
})


// document ready
$(document).ready(function(){
    //Event for pushed the video
    $('#your-carousel-id').carousel({
        pause: true,
        interval: false
    });
});