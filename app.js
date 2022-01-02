//for dropdown menu

$(document).ready(() => {
    $(".header_right_item_dropdown_first").mouseenter(() => {
        $(".branches_hidden").slideDown(300);
    });
    $(".header_right_item_dropdown_first").mouseleave(() => {
        $(".branches_hidden").delay(500).slideUp(300);
    });
    $(".header_right_item_dropdown_second").mouseenter(() => {
        $(".company_hidden").slideDown(300);
    });
    $(".header_right_item_dropdown_second").mouseleave(() => {
        $(".company_hidden").delay(500).slideUp(300);
    });

    //for dropdown menu for mls

    $(".mls_header_right_item_dropdown_first").click(() => {
        $(".mls_branches_hidden").slideToggle(300);
    });
    $(".mls_header_right_item_dropdown_second").click(() => {
        $(".mls_company_hidden").slideToggle(300);
    });


    //showing menu on click on menu bars (for lower screen screen sizes)

    $(".menu_bars").click(() => {
        $(".menu_lower_screen").slideDown(300);
        $(".menu_close").css("visibility", "visible");
        $(".menu_bars").css("visibility", "hidden");
    })

    $(".menu_close").click(() => {
        $(".menu_lower_screen").slideUp(300);
        $(".menu_close").css("visibility", "hidden");
        $(".menu_bars").css("visibility", "visible");
    })

    //header img carousel

    var i = 0;
    var currentSlide = 0;
    setInterval(() => {
        var img = document.getElementsByClassName("header_img");
        if (currentSlide == img.length) {
            currentSlide = 0;
        }
        for (i = 0; i < img.length; i++) {
            $(img[i]).css("opacity", "0");
        }
        $(img[currentSlide]).css("opacity", "1");
        currentSlide++;
    }, 3000);

    //changing awards imgs
    //first change with setTimeout and after that with setInterval

    setTimeout(() => {
        $(".award_cont").css("right", "10px");
    }, 0);
    setTimeout(() => {
        $(".award_cont").css("opacity", "0");
    }, 3000);
    setTimeout(() => {
        $(".award_cont").css("right", "-200px");
    }, 4000);
    setTimeout(() => {
        $(".award_cont").css("opacity", "1");
        $(".award_img").attr(
            "src",
            "http://tsiskvili.ge/modules/awards/uploads/17_preview.png"
        );
    }, 5000);

    var j = 0;
    setInterval(() => {
        setTimeout(() => {
            $(".award_cont").css("right", "10px");
        }, 0);
        setTimeout(() => {
            $(".award_cont").css("opacity", "0");
        }, 3000);
        setTimeout(() => {
            $(".award_cont").css("right", "-200px");
        }, 4000);
        setTimeout(() => {
            $(".award_cont").css("opacity", "1");
            var awardImg = [
                "http://tsiskvili.ge/modules/awards/uploads/11_preview.png",
                "http://tsiskvili.ge/modules/awards/uploads/14_preview.png",
                "http://tsiskvili.ge/modules/awards/uploads/12_preview.png",
                "http://tsiskvili.ge/modules/awards/uploads/16_preview.png",
                "http://tsiskvili.ge/modules/awards/uploads/19_preview.png",
                "http://tsiskvili.ge/modules/awards/uploads/17_preview.png",
            ];
            if (j === awardImg.length - 1) {
                $(".award_img").attr("src", awardImg[j]);
                j = 0;
            } else {
                $(".award_img").attr("src", awardImg[j]);
                j++;
            }
        }, 5000);
    }, 6000);

    // on scroll changes logo measures

    window.onscroll = () => {
        if (window.pageYOffset > 0) {
            $(".header_logo").addClass("on_scroll_add_logo");
        } else {
            $(".header_logo").removeClass("on_scroll_add_logo");
        }
    };

    // on click scroll down smoothly

    $(".down_arrow_scope").click(() => {
        $("html, body").animate({
                scrollTop: $(".down_arrow_scope").position().top + 50,
            },
            1000
        );
    });

    // adding class to each main_branches_grid_cont_cont element when grid is viewed

    $(window).scroll(function() {
        if (window.pageYOffset > $(".main_branches").position().top - 200) {
            setTimeout(() => {
                $(".sb").addClass("branches_anim");
            }, 0);
            setTimeout(() => {
                $(".et").addClass("branches_anim");
            }, 500);
            setTimeout(() => {
                $(".wy").addClass("branches_anim");
            }, 1000);
            setTimeout(() => {
                $(".tit").addClass("branches_anim");
            }, 1500);
            setTimeout(() => {
                $(".tiv").addClass("branches_anim");
            }, 2000);
            setTimeout(() => {
                $(".a").addClass("branches_anim");
            }, 2500);
        }
    });

    if (window.pageYOffset > $(".main_branches").position().top - 200) {
        setTimeout(() => {
            $(".sb").addClass("branches_anim");
        }, 0);
        setTimeout(() => {
            $(".et").addClass("branches_anim");
        }, 500);
        setTimeout(() => {
            $(".wy").addClass("branches_anim");
        }, 1000);
        setTimeout(() => {
            $(".tit").addClass("branches_anim");
        }, 1500);
        setTimeout(() => {
            $(".tiv").addClass("branches_anim");
        }, 2000);
        setTimeout(() => {
            $(".a").addClass("branches_anim");
        }, 2500);
    }

    //the same as previous but for services

    $(window).scroll(function() {
        if (window.pageYOffset > $(".services_cont").position().top - 200) {
            setTimeout(() => {
                $(".delivery").addClass("services_anim");
            }, 0);
            setTimeout(() => {
                $(".khinkali").addClass("services_anim");
            }, 500);
            setTimeout(() => {
                $(".distilling").addClass("services_anim");
            }, 1000);
        }
    });


    if (window.pageYOffset > $(".services_cont").position().top - 200) {
        setTimeout(() => {
            $(".delivery").addClass("services_anim");
        }, 0);
        setTimeout(() => {
            $(".khinkali").addClass("services_anim");
        }, 500);
        setTimeout(() => {
            $(".distilling").addClass("services_anim");
        }, 1000);
    }
});