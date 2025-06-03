$(function(){
    let gnb = $(".logo-gnb > .gnb > a"); 
    let mega = $(".mega-navi > .mega-navi-inner");  

    gnb.each(function(index, item){
        $(item).on("mouseover", function(){
            $(this).addClass('action');
            mega.removeClass('action');
            
            let gnbActIndex = gnb.index($(this));
            if(gnbActIndex < mega.length){
                mega.eq(gnbActIndex).addClass('action');
            }
        })
        $(item).on("mouseleave",function(){
            mega.removeClass('action');
        })
    })
})
