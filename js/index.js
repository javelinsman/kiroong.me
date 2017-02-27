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
