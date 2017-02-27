$(document).ready(() => {
    $('#title .panel').animate({'opacity':1}, 2000);
    $('#b1').click(() => {
        $('html, body').animate({
            scrollTop: $('#title').height() - $('nav').height()
        }, 2000);
    });
    $('#b2').click(() => {
        $('html, body').animate({
            scrollTop: $('#past').offset().top - $('nav').height()
        }, 2000);
    });
    $('#b3').click(() => {
        $('html, body').animate({
            scrollTop: $('#objective').offset().top - $('nav').height()
        }, 2000);
    });

    $(window).scroll( function() {
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        var middle_of_window = $(window).scrollTop() + $(window).height()/2;
        $('.fadein').each((i, obj) => {
            var bottom_of_object = $(obj).offset().top + $(obj).outerHeight();
            var top_of_object = $(obj).offset().top;
            //if( bottom_of_window > bottom_of_object || middle_of_window > top_of_object){
            if( middle_of_window > top_of_object){
                $(obj).animate({'opacity':'1'}, 500);
                $(obj).removeClass('fadein');
            }
        });
        if($('.fadein').length == 1){
            setTimer(()=>{
                $('.fadein').animate({'opacity':'1'}, 500);
                $('.fadein').removeClass('fadein');
            }, 1000);
        }
        top1 = $('#intro').offset().top;
        top2 = $('#past').offset().top;
        top3 = $('#objective').offset().top;
        if(top3 < bottom_of_window){
            $('#b1').removeClass('active-nav');
            $('#b2').removeClass('active-nav');
            $('#b3').addClass('active-nav');
        }
        else if(top2 < bottom_of_window){
            $('#b1').removeClass('active-nav');
            $('#b2').addClass('active-nav');
            $('#b3').removeClass('active-nav');
        }
        else if(top1 < bottom_of_window){
            $('#b1').addClass('active-nav');
            $('#b2').removeClass('active-nav');
            $('#b3').removeClass('active-nav');
        }
        else{
            $('#b1').removeClass('active-nav');
            $('#b2').removeClass('active-nav');
            $('#b3').removeClass('active-nav');
        }
    });
})
