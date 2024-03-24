$(function () {
    $('.nav-toggler').on('click', function () {
        $('.main-nav').toggleClass('main-nav--open');
        $('.nav-toggler').toggleClass('nav-toggler--open');
        $('body').toggleClass('no-overflow-nav');
    });
});
if ($(window).width() <= 760) {
    $(document).ready(function () {
        $('.more-list').on('click', function () {
            if ($('.roll-up').attr('data-click-state') == 1) {
                $('.roll-up').attr('data-click-state', 0)
                $('.roll-up').removeClass('roll-down');
                $(".more-list").html('View all')
            } else {
                $('.roll-up').attr('data-click-state', 1)
                $('.roll-up').addClass('roll-down');
                $(".more-list").fadeOut();
            }
        });
    });
}
$(function () {
    $('.login-js').on('click', function () {
        $('.modal-wrapper').addClass('modal-wrapper--open');
        $('body').addClass('no-overflow-log');
        if (window.innerWidth < 768) {
            $('.nav-toggler').click();
        }
    });
    $('.login-js_req').on('click', function () {
        $('.modal-wrapper').addClass('modal-wrapper--open');
        $('body').addClass('no-overflow-log');
    });
    $('body').on('click', '.login-modal__closer', function () {
        $('.modal-wrapper').removeClass('modal-wrapper--open');
        $('body').removeClass('no-overflow-log');
    });
});
$(function () {
    $('.select-dropdown p').on('click', function () {
        $('.with-dropdown').toggleClass('with-dropdown--open');
    });
});
var fixTop = 10;//$('header').offset().top +
$(window).scroll(function () {
    var currentScroll = $(window).scrollTop();
    if (currentScroll >= fixTop) {
        $('header').addClass('header-scroll');
    } else {
        $('header').removeClass('header-scroll');
    }
});
$(function () {
    if (window.devicePixelRatio == 2) {
        var images = $("img.retina");
        for (var i = 0; i < images.length; i++) {
            var imageType = images[i].src.substr(-4);
            var imageName = images[i].src.substr(0, images[i].src.length - 4);
            imageName += "@2x" + imageType;
            images[i].src = imageName;
        }
    }
});
$(function () {
    if (window.devicePixelRatio == 3) {
        var images = $("img.retina");
        for (var i = 0; i < images.length; i++) {
            var imageType = images[i].src.substr(-4);
            var imageName = images[i].src.substr(0, images[i].src.length - 4);
            imageName += "@3x" + imageType;
            images[i].src = imageName;
        }
    }
});
$(function () {
    var nav = document.getElementById("main-nav"), anchor = nav.getElementsByTagName("a"), current = window.location;
    for (var i = 0; i < anchor.length; i++) {
        if (anchor[i].href == current) {
            anchor[i].className = "active";
        }
    }
});
$('.wheel_down').on('click', function () {
    $('html, body').animate({scrollTop: $(".home__offer").offset().top - 40}, 1000);
});
$(document).ready(function () {
    var ua = navigator.userAgent,
        iOS = /iPad|iPhone|iPod/.test(ua);
    if (iOS) {
        $("body").addClass("im");
    }
});