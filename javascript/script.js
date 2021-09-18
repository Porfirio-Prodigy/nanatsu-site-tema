// Carousel Efeito com responsividade

$('.carousel').slick({
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    adaptiveHeight: true,
    autoplaySpeed: 3000,
    arrows: false,
    mobileFirst: true,
    responsive: [
        {
            breakpoint: 530, // aqui define até que largura será as configs abaixo
            settings: {
                infinite: true,
                speed: 500,
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: true,
                adaptiveHeight: true,
                autoplaySpeed: 3000,
                arrows: false,
                mobileFirst: true,
            },

            breakpoint: 700,
            settings: {
                infinite: true,
                speed: 500,
                slidesToShow: 5,
                slidesToScroll: 2,
                autoplay: true,
                adaptiveHeight: true,
                autoplaySpeed: 3000,
                arrows: false,
                mobileFirst: true,
            },

            breakpoint: 900,
            settings: {
                infinite: true,
                speed: 500,
                slidesToShow: 5,
                slidesToScroll: 2,
                autoplay: true,
                adaptiveHeight: true,
                autoplaySpeed: 3000,
                arrows: false,
                mobileFirst: true,
            },
        },
    ],
});
