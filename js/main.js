$(".gallery").fancybox({
    openEffect: 'elastic'
});

function Clear(){
    document.getElementById('Myform').reset();
    document.getElementById('Myform1').reset();
}

$('a[href^="#adress"]').bind('click.smoothscroll', function (e) {
    e.preventDefault();

    document.getElementById('burger').checked = false;

    var target = this.hash,
        $target = $(target);

    $('html, body').stop().animate({
        'scrollTop': $target.offset().top
    }, 500, 'swing', function () {
        window.location.hash = target;
    });
});

$('a[href^="#bonuses"]').bind('click.smoothscroll', function (e) {
    e.preventDefault();

    document.getElementById('burger').checked = false;

    var target = this.hash,
        $target = $(target);

    $('html, body').stop().animate({
        'scrollTop': $target.offset().top
    }, 500, 'swing', function () {
        window.location.hash = target;
    });
});

$('a[href^="#instagram"]').bind('click.smoothscroll', function (e) {
    e.preventDefault();

    document.getElementById('burger').checked = false;

    var target = this.hash,
        $target = $(target);

    $('html, body').stop().animate({
        'scrollTop': $target.offset().top
    }, 500, 'swing', function () {
        window.location.hash = target;
    });
});
