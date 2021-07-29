"use strict";

var scrollTo = function (sectionEl = "", callback = function () {}) {
  $("html, body").animate(
    {
      scrollTop: sectionEl ? calculateOffset(sectionEl) : 0,
    },
    700,
    "swing",
    callback()
  );
};
var calculateOffset = function (el) {
  if ($(el).length == 0) return;
  if ($(window).width() >= 980) return Math.floor($(el).offset().top - 69);
  return Math.floor($(el).offset().top);
};
// on ready state
$(function () {
  // breakpoint and up
  $(window).resize(function () {
    if ($(window).width() >= 980) {
      // when you hover a toggle show its dropdown menu
      $(".navbar .dropdown-toggle").hover(function () {
        $(this).parent().toggleClass("show");
        $(this).parent().find(".dropdown-menu").toggleClass("show");
      });

      // hide the menu when the mouse leaves the dropdown
      $(".navbar .dropdown-menu").mouseleave(function () {
        $(this).removeClass("show");
      });

      // do something here
    }
  });
  $(document).scroll(function () {
    var scroll = $(this).scrollTop();
    // var navbar = $(".main-navbar");
    // var scrollUpBtn = $(".scroll-up");
    // if (scroll > 0) {
    //   scrollUpBtn.fadeIn();
    // } else {
    //   scrollUpBtn.fadeOut();
    // }
    // if ($(window).width() >= 992) {
    //   if (scroll > 140) {
    //     if (!navbar.hasClass("fixed")) {
    //       $("body").css({ "padding-top": navbar.height() + "px" });
    //       navbar.addClass("fixed");
    //     }
    //   } else {
    //     navbar.removeClass("fixed");
    //     $("body").css({ "padding-top": "0px" });
    //   }
    // }
    if (scroll == 0) {
      $("ul.navigator li").removeClass("active");
      $("#navIntro").addClass("active");
    } else $("#navIntro").removeClass("active");
    
    if (scroll >= calculateOffset(".about-hay2a") - 400) {
      $("ul.navigator li").removeClass("active");
      $("#navAbout").addClass("active");
    } else $("#navAbout").removeClass("active");

    
    if (scroll >= calculateOffset(".our-services") - 500) {
      $("ul.navigator li").removeClass("active");
      $("#navServices").addClass("active");
    } else $("#navServices").removeClass("active");

    if (scroll >= calculateOffset(".our-partners") - 500) {
      $("ul.navigator li").removeClass("active");
      $("#navOurPartners").addClass("active");
    } else $("#navOurPartners").removeClass("active");
   
    if (scroll >= calculateOffset(".latest-news") - 400) {
      $("ul.navigator li").removeClass("active");
      $("#navNews").addClass("active");
    } else $("#navNews").removeClass("active");

    if (scroll >= calculateOffset(".ads") - 400) {
      $("ul.navigator li").removeClass("active");
      $("#navAds").addClass("active");
    } else $("#navAds").removeClass("active");

    if (scroll >= calculateOffset(".versions") - 400) {
      $("ul.navigator li").removeClass("active");
      $("#navVersions").addClass("active");
    } else $("#navVersions").removeClass("active");
  
    if (scroll >= calculateOffset(".sharekna-elraay") - 400) {
      $("ul.navigator li").removeClass("active");
      $("#navSharekna").addClass("active");
    } else $("#navSharekna").removeClass("active");
  });



  


  $(".search-toggle").on("click", function (e) {
    // $(".search-box").toggle();
    //show search action
     
      $(".search-box").fadeToggle("fast", function() {
      $(".search-box input").focus();
      // Animation complete.
      
      });
      
  $(document).click(function(e) {
  if (!$(e.target).is('.searchbox, .searchbox *')) {
  $(".searchbox").hide();
  //$(".search-input").val("");
  }
  });
  $('.closeSearch').click(function(e) {
  $(".searchbox").hide();
  $(".search-input").val("");
  });

    $(".search-box").toggleClass("open-search");

    // $("body").toggleClass("header-popup-open");
    e.stopPropagation();
   
    
  });
  $(document).click(function(e) {
  if (!$(e.target).is('.search-box input, .search-toggle*')) {
  $(".search-box").hide();
  $("body").removeClass("header-popup-open");
  console.log("hhhhhhhhhhh");
  $(".search-box").toggleClass("open-search");
  $(".search-box input").val("");




}
  });





  $(".scroll-down").on("click", function () {
    scrollTo(".about-hay2a");
  });
  // $(".scroll-up").on("click", function () {
  //   scrollTo();
  // });
  $("#navIntro a").on("click", function () {
    scrollTo(false, function () {
      $("ul.navigator li").removeClass("active");
      $("#navIntro").addClass("active");
    });
  });
  $("#navAbout a").on("click", function () {
    scrollTo(".about-hay2a", function () {
      $("ul.navigator li").removeClass("active");
      $("#navAbout").addClass("active");
    });
  });
  
  $("#navServices a").on("click", function () {
    scrollTo(".our-services", function () {
      $("ul.navigator li").removeClass("active");
      $("#navServices").addClass("active");
    });
  });
  $("#navOurPartners a").on("click", function () {
    scrollTo(".our-partners", function () {
      $("ul.navigator li").removeClass("active");
      $("#navOurPartners").addClass("active");
    });
  });
  $("#navNews a").on("click", function () {
    scrollTo(".latest-news", function () {
      $("ul.navigator li").removeClass("active");
      $("#navNews").addClass("active");
    });
  });
  $("#navAds a").on("click", function () {
    scrollTo(".ads", function () {
      $("ul.navigator li").removeClass("active");
      $("#navAds").addClass("active");
    });
  });
  $("#navVersions a").on("click", function () {
    scrollTo(".versions", function () {
      // $("ul.navigator li").removeClass("active");
      $("#navVersions").addClass("active");
    });
  });
  $("#navSharekna a").on("click", function () {
    scrollTo(".sharekna-elraay", function () {
      // $("ul.navigator li").removeClass("active");
      $("#navSharekna").addClass("active");
    });
  });
});


