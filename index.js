$(document).on("ready", function () {

    function scrollToAnchor(aid) {
        const destination = $("a[name='" + aid + "']");
        $('html,body').animate({
            scrollTop: destination.offset().top
        }, 'slow');
    }

    $(document).on('click', '.smooth-link', function () {
        scrollToAnchor('demo');
    });
});
$(document).ready(function () {
    $(window).scroll(function () {
        $('.navBar').css("opacity", 1 - $(window).scrollTop() / 1000)
    })

})
var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
    return false;
};
/*$(function()
{  
    var width = 900;  
    var animationSpeed = 2000;  
    var pause = 5000;  
    var currentSlide = 1;   
    var $slider = $('#slider');  
    var $sliderAnimation = $slider.find('.slides');  
    var $slides = $sliderAnimation.find('.slide');  
  
    setInterval(function()
    {  
         $sliderAnimation.animate({'margin-left': '-='+width}, animationSpeed, function(){  
         currentSlide ++;  
         if(currentSlide === $slides.length)  
         {  
                $sliderAnimation.css('margin-left', 0);  
                currentSlide = 1;  
         }  
     });  
    },pause);  
});  */
