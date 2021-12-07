$(function(){
    $('.slider__inner').slick({
        arrows: false,
        dots: true,
    });

    $('.works__inner').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button class="slick-arrow slick-prev"><img src="images/icons/works-slider-left.svg" alt=""></button>',
        nextArrow: '<button class="slick-arrow slick-next"><img src="images/icons/works-slider-right.svg" alt=""></button>',
        responsive: [
            {
                breakpoint: 911,
                settings: {
                slidesToShow: 3,
                }
            },
            {
                breakpoint: 681,
                settings: {
                slidesToShow: 2,
                }
            },
            {
                breakpoint: 455,
                settings: {
                slidesToShow: 1,
                }
            },
        ]
    });

    $('.header__menu-btn').on('click', () => {
        $('.header__menu  > ul').slideToggle();
    })

    $('.header__drop-down.drop-down').on('click', function(){
        $(this).children('.drop-down__list').toggleClass('active');
        $(this).children('a').toggleClass('active');
    })
});