$(document).ready(function(){
    $(window).scroll(function() {
        if(this.scrollY >  20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        if(this.scrollY > 500) {
            $('.scroll-up').addClass("visible");
        } else {
            $('.scroll-up').removeClass("visible");
        }
    });

    $('.scroll-up').click(function() {
        $('html').animate({scrollTop: 0});
    });

    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    $('.menu a').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                navi: false
            },
            600: {
                items: 2,
                navi: false
            },
            1000: {
                items: 3,
                navi: false
            }
        }

    });
});