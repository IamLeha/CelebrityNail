$(".gallery").fancybox({
    closeEffect: 'elastic',
    openEffect: 'elastic'
});

function Clear() {
    document.getElementById('Myform').reset();
    document.getElementById('Myform1').reset();
}

var arr = ['a[href^="#adress"]', 'a[href^="#bonuses"]', 'a[href^="#instagram"]']
for (var i = 0; i < 3; i++) {

    $(arr[i]).bind('click.smoothscroll', function (e) {
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
}
/*
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
});*/