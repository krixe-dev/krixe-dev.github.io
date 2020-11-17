var slideIndex = 1;

$(document).ready(function () {

    showSlides(slideIndex);

    $(".counter").counterUp({
        delay: 10,
        time: 1200
    });

});

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var slides = document.getElementsByClassName("slide");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    $.each(slides, function (index, value) {
        if (index === (slideIndex - 1)) {
            $(value).css("display", "block");
        } else {
            $(value).css("display", "none");
        }
    });
}

