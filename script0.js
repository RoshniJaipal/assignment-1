$(document).ready(function () {

    /* Fade in the page */

    $("main").hide().fadeIn(700);


    /* Resume card hover */

    $(".resume-card, .bio-card").hover(

        function () {
            $(this).css(
                "transform",
                "translateY(-3px)"
            );
        },

        function () {
            $(this).css(
                "transform",
                "translateY(0)"
            );
        }

    );


    /* Welcome message */

    console.log(
        "Welcome to Roshni Jaipal's Greenfolio!"
    );

});


/* Say Hello button */

function showMessage() {

    alert(
        "Hello! 🌱 Thanks for visiting my Greenfolio!"
    );

}