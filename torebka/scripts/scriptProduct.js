var slideIndex = 1;

$(document).ready(function () {

    showSlides(slideIndex);

    $(".counter").counterUp({
        delay: 10,
        time: 500
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

// ----------------------------------------------------------------
// Setup Modal View
// 
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var imagesToModal = document.querySelectorAll('.slide img');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

imagesToModal.forEach((imgModal) => {
    imgModal.addEventListener('click', (event) => {
        //event.preventDefault();
        modal.style.display = "block";
        modalImg.src = imgModal.src;
    });
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}

