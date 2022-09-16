
$(document).ready(function () {

    $("#logotipo").on("mouseover", function () {

        $("#banner h1").addClass("efeito");

    }).on("mouseout", function () {

        $("#banner h1").removeClass("efeito");
    });

    $("#input-search").on("focus", function () {

        $("li.search",).addClass("ativo");

    }).on("blur", function () {

        $("li.search").removeClass("ativo");

    });

    $(".thumbnails").owlCarousel({
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        loop: true,
        margin: 10,        
        nav: true,
        navText: ["Anterior", "Próximo"],
        responsive: {
            0: {
                items: 1,
                slideBy: 1,
            },
            480: {
                items: 3,
                slideBy: 3,
            },
            1000: {
                items: 4,
                slideBy: 4,
            }
        }

    });

    var owl = $('.owl-carousel');
    owl.owlCarousel();

    $('#btn-news-prev').click(function () {
        owl.trigger('prev.owl.carousel');
    });

    $('#btn-news-next').click(function () {
        owl.trigger('next.owl.carousel');
    });

    $("#page-up").on("click", function (event) {

        $("html,body").animate({
            scrollTop: 0
        }, 1000);

        event.preventDefault();

    })

    $("#btn-bars").on("click", function () {

        $("header").toggleClass("open-menu");

    });

    $("#menu-mobile-mask, .btn-close").on("click", function () {

        $("header").removeClass("open-menu");

    });

    $("#btn-search").on("click", function () {

        $("header").toggleClass("open-search");
        $("#input-search-mobile").focus();

    });

});