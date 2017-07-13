$(document).ready(function() {

    // // countdown
    $(".js-timer").countdown('2017/08/02', function(event) {
        $('.js-timer-days').text(event.strftime('%D'));
        $('.js-timer-hour').text(event.strftime('%H'));
        $('.js-timer-min').text(event.strftime('%M'));
        $('.js-timer-sec').text(event.strftime('%S'));
    });

    $('.js-timer-tokken')
      .prop('number', 214815)
      .animateNumber(
        {
          number: 0,
          numberStep: function(now, tween) {
            var target = $(tween.elem),
                rounded_now = Math.round(now);

            target.text(now === tween.end ? 'Launch!' : rounded_now);
          }
        },
        1641600000,  // до 02.08.2017

        'linear'
    );




    //effects
    function visibility(){
        var window_top = $(window).scrollTop();
        var window_height = $(window).height();
        var start_visibility = window_top + window_height;
      
        $(".js-visibility").each(function(){
        
            var block_position = $(this).offset().top;

            if(start_visibility >= block_position){
                $(this).addClass('is-visible');
            }
        });
    }
    visibility();
    $(window).scroll(function(){
        visibility();
    });
    $(window).load(function(){
        visibility();
    });


    $('.js-nav-btn').click(function(event){
        $(this).toggleClass('is-active');
        $('.js-mob-nav').toggleClass('is-visible');
    });

    $('.js-nav-link').on('click', function() {
        var section = $(this).attr('href');
        
        $('html, body').animate({
            scrollTop: $(section).offset().top - 10
        }, 500);

        $('.js-nav-btn').removeClass('is-active');
        $('.js-mob-nav').removeClass('is-visible');

        return false;
    });

    $('.js-join-btn').on('click', function() {
        var popup = $('html, body').find('.popup');
        popup.addClass('is-open');

    });

    // scroll button
    $(".js-scroll-top").on("click", function(){
        $('html, body').animate({
            scrollTop: 0
        }, 100);
        return false;
    });

    var lastScrollTop = 0;
    $(window).scroll(function(event){
       var st = $(this).scrollTop();
       if (st > lastScrollTop){
            if (!$(".js-scroll-top").hasClass("is-visible")) {
                $(".js-scroll-top").addClass("is-visible");
            }

       } else {
        if ($(".js-scroll-top").hasClass("is-visible")) {
            $(".js-scroll-top").removeClass("is-visible");
        }
       }
       lastScrollTop = st;
    });

});