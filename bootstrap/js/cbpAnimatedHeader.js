/**
 * cbpAnimatedHeader.js v1.0.0
 *
 */

$(document).ready(function () {

   	//hide navbar at first
    $('.navbar').hide();

    var top = $("#header").offset().top;
    var height = $("#header").outerHeight();

    function scroll() {
        if ($(window).scrollTop() > (top + height)) {
            $('.navbar').fadeIn();
        } else {
            $('.navbar').fadeOut();
        }


    }

    document.onscroll = scroll;

});