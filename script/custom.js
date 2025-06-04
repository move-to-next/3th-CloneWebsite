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
    }, 5000);
})