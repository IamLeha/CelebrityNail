$(".gallery").fancybox({
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