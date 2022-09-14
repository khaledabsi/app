
$(window).on("load", function () {

    /*-------------------preloader-------------------*/
    $(".preloader").fadeOut("slow")
});

$(document).ready(function () {

    /*-------------------Navbar Shrink--------------------*/
    new WOW().init();

    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 90) {
            $(".navbar").addClass("navbar-shrink fixed-top");
        }
        else {
            $(".navbar").removeClass("navbar-shrink fixed-top");

        }
    });

    // window.addEventListener('scroll', function() {
    //     if(window.pageYOffset > 90) {
    //         document.getElementsByClassName('navbar').classList.add('')
    //     }
    // })

    /*-------------------Video Popup--------------------*/
    const videoSrc = $("#player-1").attr("src");
    $(".video-play-btn, .video-popup").on("click", function () {
        if ($(".video-popup").hasClass("open")) {
            $(".video-popup").removeClass("open");
            $("#player-1").attr("src", "");
        }
        else {
            $(".video-popup").addClass("open");
            if ($("#player-1").attr("src") == '') {
                $("#player-1").attr("src", videoSrc);
            }
        }
    });

    /*-------------------Page Scrolling Scrollit--------------------*/
    $.scrollIt({
        topOffset: 0
    });


    /*-------------------Navbar Collapse--------------------*/
    $(".nav-link").on("click", function () {
        $(".navbar-collapse").collapse("hide");
    });


    /*-------------------Toggle Theme light & dark mode--------------------*/
    function toggleTheme() {
        if (localStorage.getItem("shala-theme") !== null) {
            if (localStorage.getItem("shala-theme") === "dark") {
                $("body").addClass("dark")
            }
            else {
                $("body").removeClass("dark")
            }
        }
        updateIcon();
    }
    toggleTheme();
    $(".toggle-theme").on("click", function () {
        $("body").toggleClass("dark");
        if ($("body").hasClass("dark")) {
            localStorage.setItem("shala-theme", "dark");
        }
        else {
            localStorage.setItem("shala-theme", "light");
        }
        updateIcon();
    });
    function updateIcon() {
        if ($("body").hasClass("dark")) {
            $(".toggle-theme i").removeClass("fa-moon");
            $(".toggle-theme i").addClass("fa-sun");
        }
        else {
            $(".toggle-theme i").removeClass("fa-sun");
            $(".toggle-theme i").addClass("fa-moon");
        }
    }
});

/*--------------------- Back To Top ------------------------*/


$(document).ready(function () {

    $(document).scroll(function () {

        var top = $(document).scrollTop();
        if (top > 300) {
            $('.back-top').fadeIn();
        } else {
            $('.back-top').fadeOut();
        }

    });

    $('.back-top').click(function () {
        $('html').animate({
            scrollTop: 0
        }, 1500);
    });

    /*--------------------- Partners Carousel ------------------------*/

    $('.partners-carousel').owlCarousel({
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 6
            }
        }
    });

    /*--------------------- Services Carousel ------------------------*/

    $('.services-carousel').owlCarousel({
        nav: true,
        margin: 14,
        autoplay: true,
        // loop:true,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });

    /*--------------------- Products Carousel ------------------------*/

    $('.products-carousel').owlCarousel({
        nav: true,
        margin: 14,
        autoplay: true,
        loop: true,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });

    /*--------------------- Testimonials Carousel ------------------------*/

    $('.testimonials-carousel').owlCarousel({
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

})

