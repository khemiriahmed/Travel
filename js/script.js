$(document).ready(function() {
    'use strict';

    //********** Btn Play Stop*******//
    $(".fly-game .btn-start").on('click', firstClick)

    function firstClick() {
        $('.btn-start').attr('src', 'img/play.png');
        $(this).parent().toggleClass('pause');
        $('h5').text('Click to Play');
        $(".fly-game .btn-start").off('click').on('click', secondClick)
    }

    function secondClick() {
        $('.btn-start').attr('src', 'img/pause.png');
        $(this).parent().toggleClass('pause');
        $('h5').text('Click to Stop');
        $(".fly-game .btn-start").off('click').on('click', firstClick)
    }



    //********** Header menu*******//
    $('.main-header .nav-icon').click(function() {
        $('.main-header .nav-icon').toggleClass('open');
        $('section.holiday-pack').toggleClass('pl');
        if ($('section.holiday-pack').hasClass('pl')) {
            $('section.holiday-pack.pl').animate({ marginLeft: "55" }, 1000);

        } else {
            $('section.holiday-pack').animate({ marginLeft: "0" }, 1000);

        }

        $('.main-menu').toggleClass('active');
    });


    //**********Slide background*******//
    $('.slider .preview img').on('click', function() {
        var t = $(this).attr('src');
        $(this).addClass('active').siblings().removeClass('active');
        $('.hero-spot').css("background-image", 'url(https://khemiriahmed.github.io/travel/' + t + ')');
    });


    $('.slider #next').on('click', function() {
        if ($('.slider .preview .active').is(':last-child')) {
            $('.slider .preview img:first-child').click();

        } else {
            $('.slider .preview .active').next().click();
        }
    });


    $('.slider #prev').on('click', function() {
        if ($('.slider .preview .active').is(':first-child')) {
            $('.slider .preview img:last-child').click();

        } else {

            $('.slider .preview .active').prev().click();

        }
    });


    $('html').niceScroll({
        cursorcolor: "#0f93d4",
        cursorwidth: "10px",
        cursorborder: "1px solid #fff",
        cursorborderradius: "20px",
        scrollspeed: "120",

    });


    //Scroll To TOP Button Fade
    $('.scroll-top').on('click', function(event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 1000);
    });


    //If Scroll Fixed top
    $(window).scroll(function() {
        var height = $(window).scrollTop();
        if (height > 100) {
            $('.main-header').addClass('header-fxd');

        } else {
            $('.main-header').removeClass('header-fxd');
        }


        //Button Scroll  FadeIn If Scroll Top Superieur 1000px
        var scrollToTop = $('.scroll-top');
        if ($(window).scrollTop() > 1000) {
            scrollToTop.fadeIn(400);
        } else {
            scrollToTop.fadeOut(400);

        }

    });

});

//Slider gallery

//variables
const SimpleSlider = (function($) {

    // initialize "global" variables
    let slider = {},
        $container,
        $slides,
        $prev,
        $next,
        $dots;
    // set slider config defaults
    slider.config = {
        slideDuration: 5000,
        auto: true,
        containerSelector: '#simpleSlider',
        slideSelector: '.p1',
        prevArrowSelector: '.prev',
        nextArrowSelector: '.next',
        dotsSelector: '.dot'
    };

    slider.init = config => {
        if (config && typeof(config) == 'object') {
            $.extend(slider.config, config);
        }
        $container = $(slider.config.containerSelector);
        $slides = $container.find(slider.config.slideSelector);
        $prev = $(slider.config.prevArrowSelector);
        $next = $(slider.config.nextArrowSelector);
        $dots = $(slider.config.dotsSelector);
        $prev.click(slider.prev);
        $next.click(slider.next);
        $dots.each((i, dot) => {
            $(dot).click(() => {
                slider.setSlideByIndex($dots.index(dot));
            });
        });
        $($slides[0]).addClass('activeText');
        $($dots[0]).addClass('active');
        if (slider.config.auto) autoNext();
    };

    function autoNext() {
        setInterval(slider.next, slider.config.slideDuration);
    }
    slider.next = () => {
        const activeSlide = $slides.filter('.activeText');
        const activeDot = $dots.filter('.active');
        const currentIndex = $slides.index(activeSlide);
        activeSlide.removeClass('activeText');
        activeDot.removeClass('active');
        if (currentIndex === $slides.length - 1) {
            $($slides[0]).addClass('activeText');
            $($dots[0]).addClass('active');
        } else {
            $($slides[currentIndex + 1]).addClass('activeText');
            $($dots[currentIndex + 1]).addClass('active');
        }
    };
    slider.prev = () => {

        const activeSlide = $slides.filter('.activeText');
        const activeDot = $dots.filter('.active');
        const currentIndex = $slides.index(activeSlide);
        activeSlide.removeClass('activeText');
        activeDot.removeClass('active');
        if (currentIndex === 0) {

            $slides[$slides.length - 1].classList.add('activeText');
            $dots[$dots.length - 1].classList.add('active');
        } else {
            $($slides[currentIndex - 1]).addClass('activeText');
            $($dots[currentIndex - 1]).addClass('active');
        }
    };

    slider.setSlideByIndex = index => {
        const activeSlide = $slides.filter('.activeText');
        const activeDot = $dots.filter('.active');
        activeSlide.removeClass('activeText');
        activeDot.removeClass('active');
        $($slides[index]).addClass('activeText');
        $($dots[index]).addClass('active');
    };
    return slider;
}(jQuery));

SimpleSlider.init({
    containerSelector: "#wrapper",
    auto: true
});