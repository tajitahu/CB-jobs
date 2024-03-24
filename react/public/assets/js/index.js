$("#back-top").hide();

$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 400) {
            $('#back-top').fadeIn();
        } else {
            $('#back-top').fadeOut();
        }
    });
    $('#back-top').click(function () {
        $('body, html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
});
//Parallax
jQuery(document).ready(function(){
    if ($(window).width() > 760) {
        $(window).scroll(function(e){
            parallaxScroll();
        });
        function parallaxScroll(){
            var scrolled = $(window).scrollTop();
            $('.home__lid').css({'background-position':'center ' + (0-(scrolled*.5)) + 'px'});
            if($('.home__stat-circle').length > 0 && scrolled > $('.home__offer').offset().top) {
                $('.home__currently').css({'background-position':'center ' + (0-(scrolled*.15) + 100) + 'px'});
            }
        }
    }
});
// bx-slider
$(document).ready(function(){
    $('.home__review-slider').slick({
              dots: false,
              slidesToShow: 3,
              centerMode: true,
              arrows: true,
              centerPadding: '60px',
              variableWidth: true,
              responsive: [
                  {
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    }
                  },
                  {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerMode: true,
                        arrows: false,
                        dots: true,
                    }
                  }
            ]
    });
});
if (typeof $('.home__stat-circle') != "undefined" && $('.home__stat-circle').length > 0) {
    //Progress circles
    var bar = new ProgressBar.Circle('.home__stat-circle', {
        color: '#009232',
        strokeWidth: 3,
        trailWidth: 3,
        easing: 'easeInOut',
        duration: 1400,
        text: {
            autoStyleContainer: false,
        },
        from: { color: '#00b045', width: 3 },
        to: { color: '#00b045', width: 3 },
        // Set default step function for all animate calls
        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);

            var value = Math.round(circle.value() * 100) + '<span style="font-size: 31px">%</span>';
            if (value === 0) {
                circle.setText('');
            } else {
                circle.setText(value);
            }
        }
    });
}

if (typeof bar != "undefined") {
    bar.text.style.fontSize = '47px';
    $(window).scroll(function(){
        var wScroll = $(this).scrollTop();
        if(wScroll > $('.home__review').offset().top) {
            bar.animate(0.65);
        }
    });
}