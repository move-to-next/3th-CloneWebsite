$(function(){
    /* Front Slider */
    $('.slide-banner-items').slick({
        infinite: true,
        arrows: true,
        dots: false,
        autoplay: true,
        fade: true,
        speed: 500,
        pauseOnHover: false,
        pauseOnFocus: false
    });
    setInterval(function(){
        $('.slide-banner-items').slick('slickPlay');
    }, 5000); // 슬라이드 배너가 백그라운드 상태일때 5초마다 자동으로 변경

    /* Shorts Pants */
    $('.shorts-pants-items').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1
    })

    /* NB-Tshirts */
    $('.nb-tshirts-items').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1
    })
})