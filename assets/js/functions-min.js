$(document).ready(function () {
    function toggleNav() {
        $(".nav-toggle").click(function () {
            $(".nav").toggleClass("open");
        });
    }

    function smoothScroll() {
        $('a[href^="#"]').click(function (e) {
            var target = $($(this).attr("href"));
            if (target.length) {
                e.preventDefault();
                $("html, body").animate({
                    scrollTop: target.offset().top - 15
                }, 300);
                $(".nav").toggleClass("open");
            }
        });
    }

    function fullSlide() {
        $("#full-slide .prev, #full-slide .next").click(function () {
            var button = $(this);
            var activeSlide = $(".banner").find(".active");
            var currentIndex = $(".banner").children().index(activeSlide);
            var totalSlides = $(".banner").children().length;

            if (button.hasClass("next")) {
                if (totalSlides - 1 > currentIndex) {
                    $(".active").removeClass("active").next().addClass("active");
                } else {
                    $(".banner li").removeClass("active").first().addClass("active");
                }
            } else {
                if (currentIndex === 0) {
                    $(".banner li").removeClass("active").last().addClass("active");
                } else {
                    $(".active").removeClass("active").prev().addClass("active");
                }
            }
        });
    }

    function threeSlide() {
        $("#three-slide .prev, #three-slide .next").click(function () {
            var button = $(this);
            var backSlide = $(".slider").find(".back");
            var backIndex = $(".slider").children().index(backSlide);
            var currentSlide = $(".slider").find(".current");
            var currentIndex = $(".slider").children().index(currentSlide);
            var frontSlide = $(".slider").find(".front");
            var frontIndex = $(".slider").children().index(frontSlide);
            var totalSlides = $(".slider").children().length;

            $(".slider").addClass("swap");

            setTimeout(function () {
                if (button.hasClass("next")) {
                    if (totalSlides - 1 > frontIndex && totalSlides - 1 > currentIndex && totalSlides - 1 > backIndex) {
                        $(".back").removeClass("back").next().addClass("back");
                        $(".current").removeClass("current").next().addClass("current");
                        $(".front").removeClass("front").next().addClass("front");
                    } else if (frontIndex === totalSlides - 1) {
                        $(".back").removeClass("back").next().addClass("back");
                        $(".current").removeClass("current").next().addClass("current");
                        $(".slider li").removeClass("front").first().addClass("front");
                    } else if (currentIndex === totalSlides - 1) {
                        $(".back").removeClass("back").next().addClass("back");
                        $(".slider li").removeClass("current").first().addClass("current");
                        $(".front").removeClass("front").next().addClass("front");
                    } else {
                        $(".slider li").removeClass("back").first().addClass("back");
                        $(".current").removeClass("current").next().addClass("current");
                        $(".front").removeClass("front").next().addClass("front");
                    }
                } else {
                    if (backIndex !== 0 && currentIndex !== 0 && frontIndex !== 0) {
                        $(".back").removeClass("back").prev().addClass("back");
                        $(".current").removeClass("current").prev().addClass("current");
                        $(".front").removeClass("front").prev().addClass("front");
                    } else if (backIndex === 0) {
                        $(".slider li").removeClass("back").last().addClass("back");
                        $(".current").removeClass("current").prev().addClass("current");
                        $(".front").removeClass("front").prev().addClass("front");
                    } else if (currentIndex === 0) {
                        $(".back").removeClass("back").prev().addClass("back");
                        $(".slider li").removeClass("current").last().addClass("current");
                        $(".front").removeClass("front").prev().addClass("front");
                    } else {
                        $(".back").removeClass("back").prev().addClass("back");
                        $(".current").removeClass("current").prev().addClass("current");
                        $(".slider li").removeClass("front").last().addClass("front");
                    }
                }
                $(".slider").removeClass("swap");
            }, 300);
        });
    }

    toggleNav();
    smoothScroll();
    fullSlide();
    threeSlide();
});
