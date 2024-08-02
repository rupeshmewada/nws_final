// AOS.init({
//     duration: 1000,
// });

jQuery(document).ready(function () {

    jQuery('.single-slider').slick({
        dots: true
    });

    jQuery('.slider-three').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        centerMode: true,
        responsive: [
            {
                breakpoint: 785,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 580,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });


    jQuery('.gallery').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 785,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 580,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });

    jQuery('.menu-open').on('click', function () {
        jQuery('.bottom-header').toggleClass('show');
        jQuery(this).toggleClass('show');
    });

    jQuery('.accordion').on('click', function () {
        jQuery('.accordion').removeClass('show');
        jQuery(this).toggleClass('show');
    });

    AOS.init({
        duration: 1900,
        offset: 10,
        once: true,
        mirror: false,
        anchorPlacement: 'top-bottom',
    });
})

