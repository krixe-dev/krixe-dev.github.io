const imgs = document.querySelectorAll('.img-select a');

const imgBtns = [...imgs];

let imgId = 1;

imgBtns.forEach((imgItem) => {
    imgItem.addEventListener('click', (event) => {
        event.preventDefault();
        imgId = imgItem.dataset.id;
        slideImage();
    });
});

function slideImage(){
    const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;

    document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
}

window.addEventListener('resize', slideImage);


// ----------------------------------------------------------------
// Setup Modal View
// 
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var imagesToModal = document.querySelectorAll('.img-showcase img');
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