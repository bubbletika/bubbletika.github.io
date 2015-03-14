/**
 * cbpAnimatedHeader.js v1.0.0
 *
 */

$(document).ready(function () {

    var navbar = $('.navbar');
    var origOffsetY = navbar.offset().top;

    function scroll() {
        if ($(window).scrollTop() >= origOffsetY) {
            $('.navbar').addClass('navbar-fixed-top');
            $('.navbar').addClass('navbar-shrink');
        } else {
        	$('.navbar').removeClass('navbar-begin')
            $('.navbar').removeClass('navbar-fixed-top');
            $('.navbar').removeClass('navbar-shrink');
        }


    }

    document.onscroll = scroll;

});