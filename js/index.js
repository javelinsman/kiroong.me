$(document).ready(() => {

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
        $('.fadein').each((i, obj) => {
            var bottom_of_object = $(obj).offset().top + $(obj).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            var top_of_object = $(obj).offset().top;
            var middle_of_window = $(window).scrollTop() + $(window).height()/2;
            if( bottom_of_window > bottom_of_object || middle_of_window > top_of_object){
                $(obj).animate({'opacity':'1'}, 500);
            }
        });
    });
})
