"use strict";
console.log('test');
$(document).ready(function () {
    setInterval(function () {
        $('.blink').toggleClass('hide')
    }, 500);

    $('.flip-container .flipper').click(function(){
        $(this).toggleClass("flip");
    });
});