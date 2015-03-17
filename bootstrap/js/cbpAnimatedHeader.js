/**
 * cbpAnimatedHeader.js v1.0.0
 *
 */

$(document).ready(function () {

   	//hide navbar at first
    $('.navbar').hide();

    function scroll() {
        if ($(window).scrollTop() > 550) {
            $('.navbar').fadeIn();
        } else {
            $('.navbar').fadeOut();
        }


    }

    document.onscroll = scroll;

});