$(function () {
    /* GNB Menu */
    let gnbMan = $('.gnb > .man');
    let megaMan = $('.mega-navi > .man')
    let gnbWoman = $('.gnb > .woman');
    let megaWoman = $('.mega-navi > .woman')
    let gnbKids = $('.gnb > .kids');
    let megaKids = $('.mega-navi > .kids')
    gnbMan.on('mouseenter',function(e){
        console.log('마우스올림');
        megaMan.css('display', 'flex');
        megaWoman.css('display', 'none');
        megaKids.css('display', 'none');
    })
    gnbMan.on('mouseleave',function(e){
        console.log('마우스내림');
        if(megaMan.css('display', 'flex')){
            megaMan.css('display', 'flex');
        }else{
            megaMan.css('display', 'none');
        }
        megaMan.on('mouseleave', function(){
                megaMan.css('display', 'none');
        })
    })

    gnbWoman.on('mouseenter',function(e){
        console.log('마우스올림');
        megaMan.css('display', 'none');
        megaWoman.css('display', 'flex');
        megaKids.css('display', 'none');
    })
    gnbWoman.on('mouseleave',function(e){
        console.log('마우스내림');
        if(megaWoman.css('display', 'flex')){
            megaWoman.css('display', 'flex');
        }else{
            megaWoman.css('display', 'none');
        }
        megaWoman.on('mouseleave', function(){
                megaWoman.css('display', 'none');
        })
    })

    gnbKids.on('mouseenter',function(e){
        console.log('마우스올림');
        megaMan.css('display', 'none');
        megaWoman.css('display', 'none');
        megaKids.css('display', 'flex');
    })
    gnbKids.on('mouseleave',function(e){
        console.log('마우스내림');
        if(megaKids.css('display', 'flex')){
            megaKids.css('display', 'flex');
        }else{
            megaKids.css('display', 'none');
        }
        megaKids.on('mouseleave', function(){
                megaKids.css('display', 'none');
        })
    })


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
    setInterval(function () {
        $('.slide-banner-items').slick('slickPlay');
    }, 5000); // 슬라이드 배너가 백그라운드 상태일때 5초마다 자동으로 변경

    /* Shorts Pants */
    $('.shorts-pants-items').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        swipeToSlide: true,
        touchThreshold: 20
    });

    /* NB-Tshirts */
    $('.nb-tshirts-items').slick({
        infinite: false,
        slidesToShow: 3.5,
        slidesToScroll: 1,
        swipeToSlide: true,
        touchThreshold: 30,
        speed:200,
        arrows: true
    }).on('afterChange', function(event, slick, currentSlide){
        if(currentSlide === 0){
            $('.slick-prev').css('opacity', '0%');
        } else {
            $('.slick-prev').css('opacity', '100%');
        }

        if(currentSlide >= slick.slideCount - slick.options.slidesToShow){
            $('.slick-next').css('opacity', '0%');
        } else {
            $('.slick-next').css('opacity', '100%');
        }
    });
    $('.slick-prev').css('opacity', '0%');

    /* Frozen-Cloth */
    $('.product-items').slick({
        infinite: false,
        slidesToShow: 4.5,
        slidesToScroll: 1,
        swipeToSlide: true,
        touchThreshold: 20,
        speed: 200,
        arrows: true
    }).on('afterChange',function(event, slick, currentSlide){
        if(currentSlide === 0){
            $('.slick-prev').css('opacity', '0%');
        }else{
            $('.slick-prev').css('opacity', '100%');
        }
        console.log(currentSlide)
        // slick.slideCount = 9
        // slick.options.slidesToShow = 4.5

        if(currentSlide >= slick.slideCount - slick.options.slidesToShow){
            $('.slick-next').css('opacity', '0%');
        }else{
            $('.slick-next').css('opacity', '100%');
        }
    });
    $('.slick-prev').css('opacity', '0%');
})