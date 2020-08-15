
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

     //>=, not <=
    if (scroll >= 60) {
        //clearHeader, not clearheader - caps H
        $(".navigation").addClass("header-sticky");
    }
    else {
        $(".navigation").removeClass("header-sticky");
    }
}); //missing );

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})

//const slidesContainer = document.querySelector(".slides-container");
//const slideImg = document.querySelectorAll(".slide-img");
//const nextBtn = document.querySelector (".next-btn");
//const prevBtn = document.querySelector(".prev-btn");
//const navDots = document.querySelector(".nav-dots");
//const singleDot = document.querySelector(".single-dot");

// Setup The Slider