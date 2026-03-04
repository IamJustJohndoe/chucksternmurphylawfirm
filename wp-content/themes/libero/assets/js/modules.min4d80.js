(!(function (a) {
  "use strict";
  switch (
    ((window.mkd = {}),
    (mkd.modules = {}),
    (mkd.scroll = 0),
    (mkd.window = a(window)),
    (mkd.document = a(document)),
    (mkd.windowWidth = a(window).width()),
    (mkd.windowHeight = a(window).height()),
    (mkd.body = a("body")),
    (mkd.html = a("html, body")),
    (mkd.menuDropdownHeightSet = !1),
    mkd.defaultHeader,
    (mkd.minVideoWidth = 1500),
    (mkd.videoWidthOriginal = 1280),
    (mkd.videoHeightOriginal = 720),
    (mkd.videoRatio = 1280 / 720),
    !0)
  ) {
    case mkd.body.hasClass("mkd-grid-1300"):
      mkd.boxedLayoutWidth = 1350;
      break;
    case mkd.body.hasClass("mkd-grid-1200"):
      mkd.boxedLayoutWidth = 1250;
      break;
    case mkd.body.hasClass("mkd-grid-1000"):
      mkd.boxedLayoutWidth = 1050;
      break;
    case mkd.body.hasClass("mkd-grid-800"):
      mkd.boxedLayoutWidth = 850;
      break;
    default:
      mkd.boxedLayoutWidth = 1150;
  }
  (a(document).ready(function () {
    ((mkd.scroll = a(window).scrollTop()),
      mkd.body.hasClass("mkd-dark-header") &&
        (mkd.defaultHeaderStyle = "mkd-dark-header"),
      mkd.body.hasClass("mkd-light-header") &&
        (mkd.defaultHeaderStyle = "mkd-light-header"));
  }),
    a(window).resize(function () {
      ((mkd.windowWidth = a(window).width()),
        (mkd.windowHeight = a(window).height()));
    }),
    a(window).scroll(function () {
      mkd.scroll = a(window).scrollTop();
    }));
})(jQuery),
  (function (a) {
    "use strict";
    function b() {
      Modernizr.touch &&
        !mkd.body.hasClass("mkd-no-animation-on-touch") &&
        mkd.body.addClass("mkd-no-animation-on-touch");
    }
    function c() {
      navigator.appVersion.toLowerCase().indexOf("mac") > -1 &&
        mkd.body.hasClass("mkd-smooth-scroll") &&
        mkd.body.removeClass("mkd-smooth-scroll");
    }
    function d() {
      fluidvids.init({
        selector: ["iframe"],
        players: ["www.youtube.com", "player.vimeo.com"],
      });
    }
    function e() {
      var b = a(".mkd-owl-slider");
      b.length &&
        b.each(function () {
          a(this).owlCarousel({
            singleItem: !0,
            transitionStyle: "fadeUp",
            navigation: !0,
            autoHeight: !0,
            pagination: !1,
            navigationText: [
              '<span class="mkd-prev-icon"><i class="fa fa-angle-left"></i></span>',
              '<span class="mkd-next-icon"><i class="fa fa-angle-right"></i></span>',
            ],
          });
        });
    }
    function f() {
      a(".mkd-preload-background").each(function () {
        var b = a(this);
        if (
          "" !== b.css("background-image") &&
          "none" != b.css("background-image")
        ) {
          var c = b.attr("style");
          if (
            ((c = c.match(/url\(["']?([^'")]+)['"]?\)/)), (c = c ? c[1] : ""))
          ) {
            var d = new Image();
            ((d.src = c),
              a(d).on("load", function () {
                b.removeClass("mkd-preload-background");
              }));
          }
        } else
          a(window).on("load", function () {
            b.removeClass("mkd-preload-background");
          });
      });
    }
    function g() {
      a("a[data-rel^='prettyPhoto']").prettyPhoto({
        hook: "data-rel",
        animation_speed: "normal",
        slideshow: !1,
        autoplay_slideshow: !1,
        opacity: 0.8,
        show_title: !0,
        allow_resize: !0,
        horizontal_padding: 0,
        default_width: 960,
        default_height: 540,
        counter_separator_label: "/",
        theme: "pp_default",
        hideflash: !1,
        wmode: "opaque",
        autoplay: !0,
        modal: !1,
        overlay_gallery: !1,
        keyboard_shortcuts: !0,
        deeplinking: !1,
        custom_markup: "",
        social_tools: !1,
        markup:
          '<div class="pp_pic_holder">                         <div class="ppt"> </div>                         <div class="pp_top">                             <div class="pp_left"></div>                             <div class="pp_middle"></div>                             <div class="pp_right"></div>                         </div>                         <div class="pp_content_container">                             <div class="pp_left">                             <div class="pp_right">                                 <div class="pp_content">                                     <div class="pp_loaderIcon"></div>                                     <div class="pp_fade">                                         <a href="#" class="pp_expand" title="Expand the image">Expand</a>                                         <div class="pp_hoverContainer">                                             <a class="pp_next" href="#"><span class="fa fa-angle-right"></span></a>                                             <a class="pp_previous" href="#"><span class="fa fa-angle-left"></span></a>                                         </div>                                         <div id="pp_full_res"></div>                                         <div class="pp_details">                                             <div class="pp_nav">                                                 <a href="#" class="pp_arrow_previous">Previous</a>                                                 <p class="currentTextHolder">0/0</p>                                                 <a href="#" class="pp_arrow_next">Next</a>                                             </div>                                             <p class="pp_description"></p>                                             {pp_social}                                             <a class="pp_close" href="#">Close</a>                                         </div>                                     </div>                                 </div>                             </div>                             </div>                         </div>                         <div class="pp_bottom">                             <div class="pp_left"></div>                             <div class="pp_middle"></div>                             <div class="pp_right"></div>                         </div>                     </div>                     <div class="pp_overlay"></div>',
      });
    }
    function h() {
      if (
        a("[data-mkd_header_style]").length > 0 &&
        mkd.body.hasClass("mkd-header-style-on-scroll")
      ) {
        var b = a(
            ".mkd-full-width-inner > .wpb_row.mkd-section, .mkd-full-width-inner > .mkd-parallax-section-holder, .mkd-container-inner > .wpb_row.mkd-section, .mkd-container-inner > .mkd-parallax-section-holder, .mkd-portfolio-single > .wpb_row.mkd-section",
          ),
          c = function (a) {
            void 0 !== a.data("mkd_header_style")
              ? mkd.body
                  .removeClass("mkd-dark-header mkd-light-header")
                  .addClass(a.data("mkd_header_style"))
              : mkd.body
                  .removeClass("mkd-dark-header mkd-light-header")
                  .addClass("" + mkd.defaultHeaderStyle);
          };
        (b.waypoint(
          function (b) {
            "down" === b && c(a(this.element));
          },
          { offset: 0 },
        ),
          b.waypoint(
            function (b) {
              "up" === b && c(a(this.element));
            },
            {
              offset: function () {
                return -a(this.element).outerHeight();
              },
            },
          ));
      }
    }
    function i() {
      var b,
        c,
        d = a(".mkd-no-animations-on-touch"),
        e = !0,
        f = a(
          ".mkd-grow-in, .mkd-fade-in-down, .mkd-element-from-fade, .mkd-element-from-left, .mkd-element-from-right, .mkd-element-from-top, .mkd-element-from-bottom, .mkd-flip-in, .mkd-x-rotate, .mkd-z-rotate, .mkd-y-translate, .mkd-fade-in, .mkd-fade-in-left-x-rotate",
        );
      d.length && (e = !1);
      var g = [
        "mkd-grow-in",
        "mkd-fade-in-down",
        "mkd-element-from-fade",
        "mkd-element-from-left",
        "mkd-element-from-right",
        "mkd-element-from-top",
        "mkd-element-from-bottom",
        "mkd-flip-in",
        "mkd-x-rotate",
        "mkd-z-rotate",
        "mkd-y-translate",
        "mkd-fade-in",
        "mkd-fade-in-left-x-rotate",
      ];
      f.length > 0 &&
        e &&
        f.each(function () {
          var d = a(this);
          ((b = d.attr("class").split(/\s+/)),
            (c = -1 !== g.indexOf(b[0]) ? b[0] : b[1]),
            d.appear(
              function () {
                d.addClass(c + "-on");
              },
              { accX: 0, accY: mkdGlobalVars.vars.mkdElementAppearAmount },
            ));
        });
    }
    function j() {
      a(".mkd-parallax-section-holder").length &&
        a(".mkd-parallax-section-holder").each(function () {
          var b = a(this);
          (b.hasClass("mkd-full-screen-height-parallax") &&
            (b.height(mkd.windowHeight),
            b.find(".mkd-parallax-content-outer").css("padding", 0)),
            b.css({ opacity: 1 }));
          var c = 0.4 * b.data("mkd-parallax-speed");
          b.parallax("50%", c);
        });
    }
    function k() {
      (a(".mkd-section .mkd-video-wrap .mkd-video").mediaelementplayer({
        enableKeyboard: !1,
        iPadUseNativeControls: !1,
        pauseOtherPlayers: !1,
        iPhoneUseNativeControls: !1,
        AndroidUseNativeControls: !1,
      }),
        navigator.userAgent.match(
          /(Android|iPod|iPhone|iPad|IEMobile|Opera Mini)/,
        ) &&
          (l(),
          a(".mkd-section .mkd-mobile-video-image").show(),
          a(".mkd-section .mkd-video-wrap").remove()));
    }
    function l() {
      a(".mkd-section .mkd-video-wrap").each(function () {
        var b = a(this),
          c = b.closest(".mkd-section").outerWidth();
        b.width(c);
        var d = b.closest(".mkd-section").outerHeight();
        ((mkd.minVideoWidth = mkd.videoRatio * (d + 20)), b.height(d));
        var e = c / mkd.videoWidthOriginal,
          f = d / mkd.videoHeightOriginal,
          g = f;
        (e > f && (g = e),
          g * mkd.videoWidthOriginal < mkd.minVideoWidth &&
            (g = mkd.minVideoWidth / mkd.videoWidthOriginal),
          b
            .find("video, .mejs-overlay, .mejs-poster")
            .width(Math.ceil(g * mkd.videoWidthOriginal + 2)),
          b
            .find("video, .mejs-overlay, .mejs-poster")
            .height(Math.ceil(g * mkd.videoHeightOriginal + 2)),
          b.scrollLeft((b.find("video").width() - c) / 2),
          b
            .find(".mejs-overlay, .mejs-poster")
            .scrollTop((b.find("video").height() - d) / 2),
          b.scrollTop((b.find("video").height() - d) / 2),
          b.addClass("mkd-video-visible"));
      });
    }
    function m() {
      var b = a(".mkd-footer-uncover"),
        c = a(".mkd-content");
      b.length &&
        mkd.windowWidth > 600 &&
        c.waitForImages(function () {
          c.css("margin-bottom", a(".mkd-footer-inner").height());
        });
    }
    function n() {
      if (mkd.body.hasClass("mkd-smooth-scroll")) {
        var b = -1 !== navigator.userAgent.indexOf("IEMobile"),
          c = function (a) {
            a.preventDefault();
            var b = a.wheelDelta / 120 || -a.detail / 3,
              c = mkd.window.scrollTop(),
              d = c - parseInt(300 * b);
            TweenLite.to(mkd.window, 0.4, {
              scrollTo: { y: d, autoKill: !0 },
              ease: Power1.easeOut,
              autoKill: !0,
              overwrite: 5,
            });
          };
        a("html").hasClass("touch") ||
          b ||
          (window.addEventListener &&
            (window.addEventListener("mousewheel", c, { passive: !1 }),
            window.addEventListener("DOMMouseScroll", c, { passive: !1 })));
      }
    }
    function o() {
      (window.addEventListener &&
        window.addEventListener("wheel", q, { passive: !1 }),
        (document.onkeydown = r),
        mkd.body.hasClass("mkd-smooth-scroll") &&
          window.removeEventListener("wheel", smoothScrollListener, {
            passive: !1,
          }));
    }
    function p() {
      (window.removeEventListener &&
        window.removeEventListener("wheel", q, { passive: !1 }),
        (window.onmousewheel =
          document.onmousewheel =
          document.onkeydown =
            null),
        mkd.body.hasClass("mkd-smooth-scroll") &&
          window.addEventListener("wheel", smoothScrollListener, {
            passive: !1,
          }));
    }
    function q(a) {
      s(a);
    }
    function r(a) {
      for (var b = [37, 38, 39, 40], c = b.length; c--; )
        if (a.keyCode === b[c]) return void s(a);
    }
    function s(a) {
      ((a = a || window.event),
        a.preventDefault && a.preventDefault(),
        (a.returnValue = !1));
    }
    function t() {
      a(".mkd-self-hosted-video").mediaelementplayer({ audioWidth: "100%" });
    }
    function u() {
      a(".mkd-self-hosted-video-holder .mkd-video-wrap").each(function () {
        var b = a(this),
          c = b.closest(".mkd-self-hosted-video-holder").outerWidth(),
          d = c / mkd.videoRatio;
        (navigator.userAgent.match(
          /(Android|iPod|iPhone|iPad|IEMobile|Opera Mini)/,
        ) && (b.parent().width(c), b.parent().height(d)),
          b.width(c),
          b.height(d),
          b.find("video, .mejs-overlay, .mejs-poster").width(c),
          b.find("video, .mejs-overlay, .mejs-poster").height(d));
      });
    }
    function v(b) {
      var c = a("#mkd-back-to-top");
      (c.removeClass("off on"),
        "on" === b ? c.addClass("on") : c.addClass("off"));
    }
    function w() {
      mkd.window.scroll(function () {
        var b,
          c = a(this).scrollTop(),
          d = a(this).height();
        ((b = c > 0 ? c + d / 2 : 1), v(b < 1e3 ? "off" : "on"));
      });
    }
    function x() {
      a("#mkd-back-to-top").on("click", function (a) {
        (a.preventDefault(),
          mkd.html.animate(
            { scrollTop: 0 },
            mkd.window.scrollTop() / 3,
            "linear",
          ));
      });
    }
    function y() {
      mkd.body.hasClass("mkd-smooth-page-transitions") &&
        (a(window).on("pageshow", function (b) {
          b.originalEvent.persisted && a(".mkd-wrapper-inner").fadeIn(0);
        }),
        a("a").on("click", function (b) {
          var c = a(this);
          1 == b.which &&
            void 0 === c.data("rel") &&
            void 0 === c.attr("rel") &&
            c.attr("href").indexOf(window.location.host) >= 0 &&
            (void 0 === c.attr("target") || "_self" === c.attr("target")) &&
            (b.preventDefault(),
            a(".mkd-wrapper-inner").fadeOut(1e3, function () {
              window.location = c.attr("href");
            }));
        }));
    }
    var z = {};
    ((mkd.modules.common = z),
      (z.mkdIsTouchDevice = b),
      (z.mkdDisableSmoothScrollForMac = c),
      (z.mkdFluidVideo = d),
      (z.mkdPreloadBackgrounds = f),
      (z.mkdPrettyPhoto = g),
      (z.mkdCheckHeaderStyleOnScroll = h),
      (z.mkdInitParallax = j),
      (z.mkdSmoothScroll = n),
      (z.mkdEnableScroll = p),
      (z.mkdDisableScroll = o),
      (z.mkdWheel = q),
      (z.mkdKeydown = r),
      (z.mkdPreventDefaultValue = s),
      (z.mkdOwlSlider = e),
      (z.mkdInitSelfHostedVideoPlayer = t),
      (z.mkdSelfHostedVideoSize = u),
      (z.mkdInitBackToTop = x),
      (z.mkdBackButtonShowHide = w),
      (z.mkdSmoothTransition = y),
      a(document).ready(function () {
        (b(),
          c(),
          d(),
          f(),
          g(),
          i(),
          A().init(),
          k(),
          l(),
          m(),
          n(),
          e(),
          t(),
          u(),
          x(),
          w(),
          y());
      }),
      a(window).on("load", function () {
        (h(), j());
      }),
      a(window).resize(function () {
        (l(), u());
      }));
    var A = (mkd.modules.common.mkdInitAnchor = function () {
      var b = function (b) {
          (a(
            ".mkd-main-menu .mkd-active-item, .mkd-mobile-nav .mkd-active-item, .mkd-vertical-menu .mkd-active-item",
          ).removeClass("mkd-active-item"),
            b.parent().addClass("mkd-active-item"),
            a(
              ".mkd-main-menu a, .mkd-mobile-nav a, .mkd-vertical-menu a",
            ).removeClass("current"),
            b.addClass("current"));
        },
        c = function () {
          (a("[data-mkd-anchor]").waypoint(
            function (c) {
              "down" === c &&
                b(
                  a(
                    "a[href='" +
                      window.location.href.split("#")[0] +
                      "#" +
                      a(this.element).data("mkd-anchor") +
                      "']",
                  ),
                );
            },
            { offset: "50%" },
          ),
            a("[data-mkd-anchor]").waypoint(
              function (c) {
                "up" === c &&
                  b(
                    a(
                      "a[href='" +
                        window.location.href.split("#")[0] +
                        "#" +
                        a(this.element).data("mkd-anchor") +
                        "']",
                    ),
                  );
              },
              {
                offset: function () {
                  return -(a(this.element).outerHeight() - 150);
                },
              },
            ));
        },
        d = function () {
          var b = window.location.hash.split("#")[1];
          "" !== b &&
            a('[data-mkd-anchor="' + b + '"]').length > 0 &&
            a(
              "a[href='" + window.location.href.split("#")[0] + "#" + b,
            ).trigger("click");
        },
        e = function (a) {
          return (
            "mkd-sticky-header-on-scroll-down-up" ==
              mkd.modules.header.behaviour &&
              (a > mkd.modules.header.stickyAppearAmount
                ? (mkd.modules.header.isStickyVisible = !0)
                : (mkd.modules.header.isStickyVisible = !1)),
            "mkd-sticky-header-on-scroll-up" == mkd.modules.header.behaviour &&
              a > mkd.scroll &&
              (mkd.modules.header.isStickyVisible = !1),
            mkd.modules.header.isStickyVisible
              ? mkdGlobalVars.vars.mkdStickyHeaderTransparencyHeight
              : mkdPerPageVars.vars.mkdHeaderTransparencyHeight
          );
        },
        f = function () {
          mkd.document.on(
            "click",
            ".mkd-main-menu a, .mkd-vertical-menu a, .mkd-btn, .mkd-anchor,.mkd-mobile-nav a",
            function () {
              var c,
                d = a(this),
                f = d.prop("hash").split("#")[1];
              if (
                "" !== f &&
                a('[data-mkd-anchor="' + f + '"]').length > 0 &&
                d.attr("href").split("#")[0] ==
                  window.location.href.split("#")[0]
              ) {
                var g = a('[data-mkd-anchor="' + f + '"]').offset().top;
                return (
                  (c = a('[data-mkd-anchor="' + f + '"]').offset().top - e(g)),
                  b(d),
                  mkd.html
                    .stop()
                    .animate({ scrollTop: Math.round(c) }, 1e3, function () {
                      history.pushState &&
                        history.pushState(null, null, "#" + f);
                    }),
                  !1
                );
              }
            },
          );
        };
      return {
        init: function () {
          a("[data-mkd-anchor]").length &&
            (f(),
            c(),
            a(window).on("load", function () {
              d();
            }));
        },
      };
    });
  })(jQuery),
  (function (a) {
    "use strict";
    function b() {
      var b,
        c = a(".mkd-page-header"),
        d = a(".mkd-sticky-header"),
        e = a(".mkd-fixed-wrapper"),
        f = a(".mkd-page-header").find(".mkd-fixed-wrapper").length
          ? a(".mkd-page-header").find(".mkd-fixed-wrapper").offset().top
          : null;
      switch (!0) {
        case mkd.body.hasClass("mkd-sticky-header-on-scroll-up"):
          mkd.modules.header.behaviour = "mkd-sticky-header-on-scroll-up";
          var g = a(document).scrollTop();
          b =
            mkdGlobalVars.vars.mkdTopBarHeight +
            mkdGlobalVars.vars.mkdLogoAreaHeight +
            mkdGlobalVars.vars.mkdMenuAreaHeight +
            mkdGlobalVars.vars.mkdStickyHeaderHeight;
          var h = function () {
            var c = a(document).scrollTop();
            ((c > g && c > b) || c < b
              ? ((mkd.modules.header.isStickyVisible = !1),
                d
                  .removeClass("header-appear")
                  .find(".mkd-main-menu .second")
                  .removeClass("mkd-drop-down-start"))
              : ((mkd.modules.header.isStickyVisible = !0),
                d.addClass("header-appear")),
              (g = a(document).scrollTop()));
          };
          (h(),
            a(window).scroll(function () {
              h();
            }));
          break;
        case mkd.body.hasClass("mkd-sticky-header-on-scroll-down-up"):
          ((mkd.modules.header.behaviour =
            "mkd-sticky-header-on-scroll-down-up"),
            (b =
              0 !== mkdPerPageVars.vars.mkdStickyScrollAmount
                ? mkdPerPageVars.vars.mkdStickyScrollAmount
                : mkdGlobalVars.vars.mkdTopBarHeight +
                  mkdGlobalVars.vars.mkdLogoAreaHeight +
                  mkdGlobalVars.vars.mkdMenuAreaHeight),
            (mkd.modules.header.stickyAppearAmount = b));
          var h = function () {
            mkd.scroll < b
              ? ((mkd.modules.header.isStickyVisible = !1),
                d
                  .removeClass("header-appear")
                  .find(".mkd-main-menu .second")
                  .removeClass("mkd-drop-down-start"))
              : ((mkd.modules.header.isStickyVisible = !0),
                d.addClass("header-appear"));
          };
          (h(),
            a(window).scroll(function () {
              h();
            }));
          break;
        case mkd.body.hasClass("mkd-fixed-on-scroll"):
          mkd.modules.header.behaviour = "mkd-fixed-on-scroll";
          var i = function () {
            mkd.scroll < f
              ? (e.removeClass("fixed"), c.css("margin-bottom", 0))
              : (e.addClass("fixed"), c.css("margin-bottom", e.height()));
          };
          (i(),
            a(window).scroll(function () {
              i();
            }));
      }
    }
    function c() {
      var b,
        c = a(".mkd-wrapper"),
        d = a(".mkd-side-menu"),
        e = a("a.mkd-side-menu-button-opener"),
        f = !1,
        g = !1,
        h = !1;
      (mkd.body.hasClass("mkd-side-menu-slide-from-right")
        ? ((b = "mkd-right-side-menu-opened"),
          c.prepend('<div class="mkd-cover"/>'),
          (f = !0))
        : mkd.body.hasClass("mkd-side-menu-slide-with-content")
          ? ((b = "mkd-side-menu-open"), (g = !0))
          : mkd.body.hasClass("mkd-side-area-uncovered-from-content") &&
            ((b = "mkd-right-side-menu-opened"), (h = !0)),
        a("a.mkd-side-menu-button-opener, a.mkd-close-side-menu").on(
          "click",
          function (i) {
            if ((i.preventDefault(), e.hasClass("opened"))) {
              if ((e.removeClass("opened"), mkd.body.removeClass(b), h))
                var j = setTimeout(function () {
                  (d.css({ visibility: "hidden" }), clearTimeout(j));
                }, 400);
            } else {
              (e.addClass("opened"),
                mkd.body.addClass(b),
                f &&
                  a(".mkd-wrapper .mkd-cover").on("click", function () {
                    (mkd.body.removeClass("mkd-right-side-menu-opened"),
                      e.removeClass("opened"));
                  }),
                h && d.css({ visibility: "visible" }));
              var k = a(window).scrollTop();
              a(window).scroll(function () {
                if (
                  Math.abs(mkd.scroll - k) > 400 &&
                  (mkd.body.removeClass(b), e.removeClass("opened"), h)
                )
                  var a = setTimeout(function () {
                    (d.css({ visibility: "hidden" }), clearTimeout(a));
                  }, 400);
              });
            }
            g &&
              (i.stopPropagation(),
              c.on("click", function () {
                (i.preventDefault(),
                  e.removeClass("opened"),
                  mkd.body.removeClass("mkd-side-menu-open"));
              }));
          },
        ));
    }
    function d() {
      var b = a(".mkd-side-menu");
      b.length &&
        b.niceScroll({
          scrollspeed: 60,
          mousescrollstep: 40,
          cursorwidth: 0,
          cursorborder: 0,
          cursorborderradius: 0,
          cursorcolor: "transparent",
          autohidemode: !1,
          horizrailenabled: !1,
        });
    }
    function e() {
      var b = a(".mkd-mobile-header .mkd-mobile-menu-opener"),
        c = a(".mkd-mobile-header .mkd-mobile-nav"),
        d = a(
          '.mkd-mobile-nav .mobile_arrow, .mkd-mobile-nav h4, .mkd-mobile-nav a[href*="#"]',
        );
      (b.length &&
        c.length &&
        b.on("tap click", function (a) {
          (a.stopPropagation(),
            a.preventDefault(),
            c.is(":visible")
              ? (b.removeClass("mkd-mobile-active"), c.slideUp(200))
              : (b.addClass("mkd-mobile-active"), c.slideDown(200)));
        }),
        d.length &&
          d.each(function () {
            a(this).on("tap click", function (b) {
              var c = a(this).nextAll("ul").first();
              if (c.length) {
                (b.preventDefault(), b.stopPropagation());
                var d = a(this).parent("li");
                c.is(":visible")
                  ? (c.slideUp(200), d.removeClass("mkd-opened"))
                  : (c.slideDown(200), d.addClass("mkd-opened"));
              }
            });
          }),
        a(".mkd-mobile-nav a, .mkd-mobile-logo-wrapper a").on(
          "click tap",
          function () {
            "http://#" !== a(this).attr("href") &&
              "#" !== a(this).attr("href") &&
              c.slideUp(200);
          },
        ));
    }
    function f() {
      if (mkd.body.hasClass("mkd-sticky-up-mobile-header")) {
        var b,
          c = a(".mkd-mobile-header"),
          d = a("#wpadminbar"),
          e = c.length ? c.height() : 0,
          f = d.length ? d.height() : 0,
          g = a(document).scrollTop();
        ((b = e + f),
          a(window).scroll(function () {
            var e = a(document).scrollTop();
            (e > b
              ? c.addClass("mkd-animate-mobile-header")
              : c.removeClass("mkd-animate-mobile-header"),
              (e > g && e > b) || e < b
                ? (c.removeClass("mobile-header-appear"),
                  c.css("margin-bottom", 0),
                  d.length && c.find(".mkd-mobile-header-inner").css("top", 0))
                : (c.addClass("mobile-header-appear"),
                  c.css("margin-bottom", b)),
              (g = a(document).scrollTop()));
          }));
      }
    }
    function g() {
      a(".mkd-drop-down > ul > li.narrow").each(function () {
        var b = mkd.windowWidth - 16,
          c = a(this).offset().left,
          d = a(this).find(".second .inner ul").width(),
          e = 0;
        e = mkd.body.hasClass("boxed")
          ? mkd.boxedLayoutWidth - (c - (b - mkd.boxedLayoutWidth) / 2)
          : b - c;
        var f;
        (a(this).find("li.sub").length > 0 && (f = e - d),
          (e < d || f < d) &&
            (a(this).find(".second").addClass("right"),
            a(this).find(".second .inner ul").addClass("right")));
      });
    }
    function h() {
      var b = a(".mkd-drop-down > ul > li");
      (b.each(function (c) {
        if (a(b[c]).find(".second").length > 0) {
          var d = a(b[c]).find(".second");
          if (a(b[c]).hasClass("wide")) {
            a(this).find(".inner > ul");
            a(this).hasClass("left_position") ||
              a(this).hasClass("right_position") ||
              d.css("left", 0);
            var e = 0;
            (a(this)
              .find(".second > .inner > ul > li")
              .each(function () {
                var b = a(this).height();
                b > e && (e = b);
              }),
              a(this).find(".second > .inner > ul > li").css("height", ""),
              a(this).find(".second > .inner > ul > li").height(e));
          }
          if (
            (mkd.menuDropdownHeightSet ||
              (a(b[c]).data("original_height", d.height() + "px"), d.height(0)),
            navigator.userAgent.match(/(iPod|iPhone|iPad)/))
          )
            a(b[c])
              .on("touchstart mouseenter", function () {
                d.css({
                  height: a(b[c]).data("original_height"),
                  overflow: "visible",
                  visibility: "visible",
                  opacity: "1",
                });
              })
              .on("mouseleave", function () {
                d.css({
                  height: "0px",
                  overflow: "hidden",
                  visibility: "hidden",
                  opacity: "0",
                });
              });
          else if (mkd.body.hasClass("mkd-dropdown-animate-height"))
            a(b[c])
              .mouseenter(function () {
                (d.css({ visibility: "visible", height: "0px", opacity: "1" }),
                  d
                    .stop()
                    .animate(
                      { height: a(b[c]).data("original_height") },
                      200,
                      "easeInSine",
                      function () {
                        d.css("overflow", "visible");
                      },
                    ));
              })
              .mouseleave(function () {
                d.stop().animate({ height: "0px" }, 0, function () {
                  d.css({ overflow: "hidden", visibility: "hidden" });
                });
              });
          else {
            var f = {
              interval: 0,
              over: function () {
                setTimeout(function () {
                  (d.addClass("mkd-drop-down-start"),
                    d.stop().css({ height: a(b[c]).data("original_height") }));
                }, 150);
              },
              timeout: 150,
              out: function () {
                (d.stop().css({ height: "0px" }),
                  d.removeClass("mkd-drop-down-start"));
              },
            };
            a(b[c]).hoverIntent(f);
          }
        }
      }),
        a(".mkd-drop-down ul li.wide ul li a").on("click", function (b) {
          if (1 == b.which) {
            var c = a(this);
            setTimeout(function () {
              c.mouseleave();
            }, 500);
          }
        }),
        (mkd.menuDropdownHeightSet = !0));
    }
    function i() {
      var b,
        c,
        d = a("a.mkd-search-opener");
      if ((a("html").hasClass("touch") && !0, d.length > 0)) {
        if (mkd.body.hasClass("mkd-fullscreen-search")) {
          var e = !1,
            f = !1;
          ((b = a(".mkd-fullscreen-search-close")),
            mkd.body.hasClass("mkd-search-fade")
              ? (e = !0)
              : mkd.body.hasClass("mkd-search-from-circle") && (f = !0),
            (function (c, e) {
              var f = a(".mkd-fullscreen-search-holder"),
                g = a(".mkd-fullscreen-search-overlay");
              (d.on("click", function (h) {
                h.preventDefault();
                var i = !1;
                if ("yes" === a(this).data("icon-close-same-position")) {
                  var j = a(this).children().first().offset().top,
                    k = a(this).children().first().css("height"),
                    l = a(this).offset().left;
                  i = !0;
                }
                (c &&
                  (f.hasClass("mkd-animate")
                    ? (mkd.body.removeClass("mkd-fullscreen-search-opened"),
                      mkd.body.addClass("mkd-search-fade-out"),
                      mkd.body.removeClass("mkd-search-fade-in"),
                      f.removeClass("mkd-animate"),
                      mkd.body.hasClass("page-template-full_screen-php") ||
                        mkd.modules.common.mkdEnableScroll())
                    : (mkd.body.addClass("mkd-fullscreen-search-opened"),
                      mkd.body.removeClass("mkd-search-fade-out"),
                      mkd.body.addClass("mkd-search-fade-in"),
                      f.addClass("mkd-animate"),
                      i &&
                        b.css({
                          top: j - mkd.scroll,
                          left: l,
                          height: k,
                          "line-height": k,
                        }),
                      mkd.body.hasClass("page-template-full_screen-php") ||
                        mkd.modules.common.mkdDisableScroll()),
                  b.on("click", function (a) {
                    (a.preventDefault(),
                      mkd.body.removeClass("mkd-fullscreen-search-opened"),
                      f.removeClass("mkd-animate"),
                      mkd.body.removeClass("mkd-search-fade-in"),
                      mkd.body.addClass("mkd-search-fade-out"),
                      mkd.body.hasClass("page-template-full_screen-php") ||
                        mkd.modules.common.mkdEnableScroll());
                  }),
                  a(document).keyup(function (a) {
                    27 == a.keyCode &&
                      (mkd.body.removeClass("mkd-fullscreen-search-opened"),
                      f.removeClass("mkd-animate"),
                      mkd.body.removeClass("mkd-search-fade-in"),
                      mkd.body.addClass("mkd-search-fade-out"),
                      mkd.body.hasClass("page-template-full_screen-php") ||
                        mkd.modules.common.mkdEnableScroll());
                  })),
                  e &&
                    (g.hasClass("mkd-animate")
                      ? (g.removeClass("mkd-animate"),
                        f.css({ opacity: 0, display: "none" }),
                        b.css({ opacity: 0, visibility: "hidden" }),
                        d.css({ opacity: 1 }))
                      : (g.addClass("mkd-animate"),
                        f.css({ display: "block" }),
                        setTimeout(function () {
                          (f.css("opacity", "1"),
                            b.css({
                              opacity: 1,
                              visibility: "visible",
                              top: j - mkd.scroll,
                              left: l,
                            }),
                            i && b.css({ top: j - mkd.scroll, left: l }),
                            d.css({ opacity: 0 }));
                        }, 200),
                        mkd.body.hasClass("page-template-full_screen-php") ||
                          mkd.modules.common.mkdDisableScroll()),
                    b.on("click", function (a) {
                      (a.preventDefault(),
                        g.removeClass("mkd-animate"),
                        f.css({ opacity: 0, display: "none" }),
                        b.css({ opacity: 0, visibility: "hidden" }),
                        d.css({ opacity: 1 }),
                        mkd.body.hasClass("page-template-full_screen-php") ||
                          mkd.modules.common.mkdEnableScroll());
                    }),
                    a(document).keyup(function (a) {
                      27 == a.keyCode &&
                        (g.removeClass("mkd-animate"),
                        f.css({ opacity: 0, display: "none" }),
                        b.css({ opacity: 0, visibility: "hidden" }),
                        d.css({ opacity: 1 }),
                        mkd.body.hasClass("page-template-full_screen-php") ||
                          mkd.modules.common.mkdEnableScroll());
                    })));
              }),
                a(".mkd-fullscreen-search-holder .mkd-search-field").focus(
                  function () {
                    a(
                      ".mkd-fullscreen-search-holder .mkd-field-holder .mkd-line",
                    ).css("width", "100%");
                  },
                ),
                a(".mkd-fullscreen-search-holder .mkd-search-field").blur(
                  function () {
                    a(
                      ".mkd-fullscreen-search-holder .mkd-field-holder .mkd-line",
                    ).css("width", "0");
                  },
                ));
            })(e, f));
        } else
          mkd.body.hasClass("mkd-search-slides-from-window-top")
            ? ((c = a(".mkd-search-slide-window-top")),
              (b = a(".mkd-search-close")),
              (function () {
                d.on("click", function (d) {
                  d.preventDefault();
                  var e;
                  ((e = a(".title").hasClass("has_parallax_background")
                    ? parseInt(
                        a(".title.has_parallax_background")
                          .css("backgroundPosition")
                          .split(" ")[1],
                      )
                    : 0),
                    0 === c.height()
                      ? (a(
                          '.mkd-search-slide-window-top input[type="text"]',
                        ).focus(),
                        mkd.body.addClass("mkd-search-open"),
                        a(".title.has_parallax_background").animate(
                          { "background-position-y": e + 50 + "px" },
                          150,
                        ))
                      : (mkd.body.removeClass("mkd-search-open"),
                        a(".title.has_parallax_background").animate(
                          { "background-position-y": e - 50 + "px" },
                          150,
                        )),
                    a(window).scroll(function () {
                      0 !== c.height() &&
                        mkd.scroll > 50 &&
                        (mkd.body.removeClass("mkd-search-open"),
                        a(".title.has_parallax_background").css(
                          "backgroundPosition",
                          "center " + e + "px",
                        ));
                    }),
                    b.on("click", function (b) {
                      (b.preventDefault(),
                        mkd.body.removeClass("mkd-search-open"),
                        a(".title.has_parallax_background").animate(
                          { "background-position-y": e + "px" },
                          150,
                        ));
                    }));
                });
              })())
            : mkd.body.hasClass("mkd-search-slides-from-header-bottom")
              ? (function () {
                  var b = a(
                    '.mkd-search-slide-header-bottom input[type="submit"]',
                  );
                  (d.on("click", function (d) {
                    (d.preventDefault(),
                      (c =
                        a(this).closest(".mkd-mobile-header").length > 0
                          ? a(this)
                              .closest(".mkd-mobile-header")
                              .children()
                              .children()
                              .first()
                          : a(this).closest(".mkd-sticky-header").length > 0
                            ? a(this)
                                .closest(".mkd-sticky-header")
                                .children()
                                .first()
                            : a(".mkd-search-slide-header-bottom").first()),
                      c.hasClass("mkd-animated")
                        ? c.removeClass("mkd-animated")
                        : c.addClass("mkd-animated"),
                      c.addClass("mkd-disabled"),
                      b.attr("disabled", "mkd-disabled"),
                      "" !==
                        a(
                          ".mkd-search-slide-header-bottom .mkd-search-field",
                        ).val() &&
                      " " !==
                        a(
                          ".mkd-search-slide-header-bottom .mkd-search-field",
                        ).val()
                        ? (b.removeAttr("mkd-disabled"),
                          c.removeClass("mkd-disabled"))
                        : (c.addClass("mkd-disabled"),
                          b.attr("disabled", "mkd-disabled")),
                      a(
                        ".mkd-search-slide-header-bottom .mkd-search-field",
                      ).keyup(function () {
                        "" !== a(this).val() && " " != a(this).val()
                          ? (b.removeAttr("mkd-disabled"),
                            c.removeClass("mkd-disabled"))
                          : (b.attr("disabled", "mkd-disabled"),
                            c.addClass("mkd-disabled"));
                      }),
                      a(".content, footer").on("click", function (a) {
                        (a.preventDefault(), c.removeClass("mkd-animated"));
                      }));
                  }),
                    a(".mkd-search-submit").length &&
                      a(".mkd-search-submit").on("click", function (a) {
                        (a.preventDefault(), a.stopPropagation(), c.submit());
                      }));
                })()
              : mkd.body.hasClass("mkd-search-covers-header") &&
                (function () {
                  var b = a(".mkd-search-submit");
                  (d.on("click", function (b) {
                    b.preventDefault();
                    var c,
                      d,
                      e,
                      f = a(".mkd-search-cover .mkd-form-holder-outer");
                    ((d = a(this)
                      .parents(".mkd-page-header")
                      .children(".mkd-menu-area")
                      .children(".mkd-grid")
                      .children()
                      .first()),
                      (e = d.parent()),
                      a(this).closest(".mkd-sticky-header").length > 0 &&
                        ((d = a(this)
                          .closest(".mkd-sticky-header")
                          .children()
                          .first()),
                        (e = d.parent())),
                      a(this).closest(".mkd-mobile-header").length > 0 &&
                        ((d = a(this)
                          .closest(".mkd-mobile-header")
                          .children()
                          .children()
                          .first()),
                        (e = d.parent())),
                      e.parent().hasClass("mkd-logo-area")
                        ? (c = mkdGlobalVars.vars.mkdLogoAreaHeight)
                        : e.parent().hasClass("mkd-top-bar")
                          ? (c = mkdGlobalVars.vars.mkdTopBarHeight)
                          : e.parent().hasClass("mkd-menu-area")
                            ? (c = mkdGlobalVars.vars.mkdMenuAreaHeight)
                            : e.hasClass("mkd-sticky-header")
                              ? (c = mkdGlobalVars.vars.mkdStickyHeight)
                              : e.parent().hasClass("mkd-mobile-header") &&
                                (c = a(".mkd-mobile-header-inner").height()),
                      f.height(c),
                      d.stop(!0).fadeIn(600),
                      a('.mkd-search-cover input[type="text"]').focus(),
                      a(".mkd-search-close, .content, footer").on(
                        "click",
                        function (a) {
                          (a.preventDefault(), d.stop(!0).fadeOut(450));
                        },
                      ),
                      d.blur(function () {
                        d.stop(!0).fadeOut(450);
                      }));
                  }),
                    b.length &&
                      b.each(function () {
                        var b = a(this);
                        b.on("click", function (a) {
                          (a.preventDefault(),
                            a.stopPropagation(),
                            b.closest(".mkd-search-cover").submit());
                        });
                      }));
                })();
        if (void 0 !== d.data("hover-color")) {
          var g = function (a) {
              a.data.searchOpener.css("color", a.data.color);
            },
            h = d.css("color"),
            i = d.data("hover-color");
          (d.on("mouseenter", { searchOpener: d, color: i }, g),
            d.on("mouseleave", { searchOpener: d, color: h }, g));
        }
      }
    }
    function j() {
      a(".mkd-main-menu").append("<span class='mkd-item-hover'></span>");
      var b = a(".mkd-item-hover"),
        c = a(".mkd-main-menu"),
        d = a(".mkd-main-menu > ul > li"),
        e = c.find(".current_page_item");
      (d.hasClass("current_page_item") &&
        (b.css({ width: e.find(".bottom-border-inner").width() }),
        b.css({
          left: e.find(".bottom-border-inner").offset().left - c.offset().left,
        })),
        b.css({ opacity: 0 }),
        d.mouseenter(function () {
          (b.css({ width: a(this).find(".bottom-border-inner").width() }),
            b.css({
              left:
                a(this).find(".bottom-border-inner").offset().left -
                a(this).parent().offset().left,
            }),
            b.animate({ opacity: 1 }, 100));
        }),
        c.mouseleave(function () {
          b.animate({ opacity: 0 }, 250, "easeOutSine");
        }));
    }
    var k = {};
    ((mkd.modules.header = k),
      (k.isStickyVisible = !1),
      (k.stickyAppearAmount = 0),
      k.behaviour,
      (k.mkdSideArea = c),
      (k.mkdSideAreaScroll = d),
      (k.mkdInitMobileNavigation = e),
      (k.mkdMobileHeaderBehavior = f),
      (k.mkdSetDropDownMenuPosition = g),
      (k.mkdDropDownMenu = h),
      (k.mkdSearch = i),
      a(document).ready(function () {
        (b(), c(), d(), e(), f(), g(), h(), i());
      }),
      a(window).on("load", function () {
        (g(), j());
      }),
      a(window).resize(function () {
        h();
      }));
  })(jQuery),
  (function (a) {
    "use strict";
    function b() {
      if (
        a(".mkd-title.mkd-has-parallax-background").length > 0 &&
        0 === a(".touch").length
      ) {
        var b = a(".mkd-title.mkd-has-parallax-background"),
          c = a(".mkd-title.mkd-has-parallax-background.mkd-zoom-out"),
          d = parseInt(b.data("background-width")),
          e = b.data("height"),
          f = (e / 1e4) * 7,
          g = -mkd.scroll * f;
        (b.css({
          "background-position":
            "center " + (g + mkdGlobalVars.vars.mkdAddForAdminBar) + "px",
        }),
          c.css({ "background-size": d - mkd.scroll + "px auto" }),
          a(window).scroll(function () {
            ((g = -mkd.scroll * f),
              b.css({
                "background-position":
                  "center " + (g + mkdGlobalVars.vars.mkdAddForAdminBar) + "px",
              }),
              c.css({ "background-size": d - mkd.scroll + "px auto" }));
          }));
      }
    }
    function c() {
      if (a(".mkd-title.mkd-title-animation").length > 0) {
        var b = a(".mkd-title.mkd-title-animation");
        a(".mkd-title.mkd-title-animation").waitForImages({
          waitForAll: !0,
          finished: function () {
            b.addClass("appeared");
          },
        });
      }
    }
    var d = {};
    ((mkd.modules.title = d),
      (d.mkdParallaxTitle = b),
      a(document).ready(function () {
        (b(), c());
      }),
      a(window).on("load", function () {}),
      a(window).resize(function () {}));
  })(jQuery),
  (function (a) {
    "use strict";
    function b() {
      var b = a(".mkd-counter");
      b.length &&
        b.each(function () {
          var b = a(this);
          b.appear(
            function () {
              if (
                (b
                  .parents(".mkd-counter-holder")
                  .addClass("mkd-counter-holder-show"),
                b.hasClass("zero"))
              ) {
                var a = parseFloat(b.text());
                b.countTo({ from: 0, to: a, speed: 2e3, refreshInterval: 100 });
              } else b.absoluteCounter({ speed: 2e3, fadeInDelay: 1e3 });
            },
            { accX: 0, accY: mkdGlobalVars.vars.mkdElementAppearAmount },
          );
        });
    }
    function c() {
      var b = a(".mkd-counter-holder");
      b.length &&
        b.each(function () {
          var b,
            c = a(this),
            d = c.find(".mkd-counter"),
            e = c.find(".mkd-counter-currency"),
            f = 1,
            g = 1;
          (mkd.windowWidth <= 1024 && ((f = 0.8), (g = 0.88)),
            mkd.windowWidth < 600 && ((f = 0.6), (g = 0.8)),
            mkd.windowWidth < 480 && ((f = 0.4), (g = 0.6)),
            mkd.windowWidth < 320 && ((f = 0.3), (g = 0.5)),
            void 0 !== c.data("digit-size") &&
              !1 !== c.data("digit-size") &&
              ((b = parseInt(c.data("digit-size"))),
              b > 90
                ? (b = Math.round(b * f))
                : b > 70 && (b = Math.round(b * g)),
              d.css("font-size", b + "px"),
              e.css("font-size", b + "px")));
        });
    }
    function d() {
      var b = a(".mkd-icon-list-item");
      b.length &&
        b.each(function () {
          var b,
            c,
            d = a(this),
            e = d.find(".mkd-icon-list-icon-holder-inner"),
            f = d.find(".mkd-icon-list-text"),
            g = 1;
          (mkd.windowWidth <= 1024 && (g = 0.75),
            mkd.windowWidth < 600 && (g = 0.65),
            mkd.windowWidth < 480 && (g = 0.5),
            void 0 !== e.data("icon-size") &&
              !1 !== e.data("icon-size") &&
              ((b = parseInt(e.data("icon-size"))),
              b > 50 && (b = Math.round(b * g)),
              e.children().css("font-size", b + "px")),
            void 0 !== f.data("title-size") &&
              !1 !== f.data("title-size") &&
              ((c = parseInt(f.data("title-size"))),
              c > 50 && (c = Math.round(c * g)),
              f.css("font-size", c + "px")));
        });
    }
    function e() {
      var b = a(".mkd-progress-bar");
      b.length &&
        b.each(function () {
          var b = a(this);
          b.appear(function () {
            if ((f(b), 0 !== b.find(".mkd-floating.mkd-floating-inside"))) {
              var a = b.find(".mkd-progress-content").height();
              ((a += parseFloat(
                b.find(".mkd-progress-title-holder").css("padding-bottom"),
              )),
                (a += parseFloat(
                  b.find(".mkd-progress-title-holder").css("margin-bottom"),
                )),
                b.find(".mkd-floating-inside").css("margin-bottom", -a + "px"));
            }
            var c = b.find(".mkd-progress-content").data("percentage"),
              d = b.find(".mkd-progress-content"),
              e = b.find(".mkd-progress-number");
            (d.css("width", "0%"),
              d.animate({ width: c + "%" }, 1500),
              e.css("left", "0%"),
              e.animate({ left: c + "%" }, 1500));
          });
        });
    }
    function f(b) {
      var c = parseFloat(b.find(".mkd-progress-content").data("percentage")),
        d = b.find(".mkd-progress-number .mkd-percent");
      d.length &&
        d.each(function () {
          var b = a(this);
          (b.parents(".mkd-progress-number-wrapper").css("opacity", "1"),
            b.countTo({ from: 0, to: c, speed: 1500, refreshInterval: 50 }));
        });
    }
    function g() {
      var b,
        c,
        d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q,
        r = a(".mkd-countdown");
      r.length &&
        r.each(function () {
          function r() {
            (v
              .find(".countdown-amount")
              .css({ "font-size": s + "px", "line-height": s + "px" }),
              v.find(".countdown-period").css({ "font-size": t + "px" }));
          }
          var s,
            t,
            u = a(this).attr("id"),
            v = a("#" + u);
          ((b = v.data("year")),
            (c = v.data("month")),
            (d = v.data("day")),
            (e = v.data("hour")),
            (f = v.data("minute")),
            (g = v.data("timezone")),
            (h = v.data("month-label")),
            (i = v.data("day-label")),
            (j = v.data("hour-label")),
            (k = v.data("minute-label")),
            (l = v.data("second-label")),
            (m = v.data("month-label-single")),
            (n = v.data("day-label-single")),
            (o = v.data("hour-label-single")),
            (p = v.data("minute-label-single")),
            (q = v.data("second-label-single")),
            (s = v.data("digit-size")),
            (t = v.data("label-size")),
            v.countdown({
              until: new Date(b, c - 1, d, e, f, 44),
              labels: ["Years", h, "Weeks", i, j, k, l],
              labels1: ["Years", m, "Weeks", n, o, p, q],
              format: "ODHMS",
              timezone: g,
              padZeroes: !0,
              onTick: r,
            }));
        });
    }
    function h() {
      var b = a(".mkd-testimonials");
      b.length &&
        b.each(function () {
          for (
            var b = a(this),
              c = a(this).find(".mkd-testimonial-content"),
              d = 0;
            d < c.length;
            d += 3
          )
            c.slice(d, d + 3).wrapAll("<div class='item-inner'></div>");
          (b.waitForImages(function () {
            a(this).animate({ opacity: 1 }, 1e3);
          }),
            b.appear(
              function () {
                b.css("visibility", "visible");
              },
              { accX: 0, accY: mkdGlobalVars.vars.mkdElementAppearAmount },
            ));
          var e = 5e3;
          c.length <= 3 && (e = !1);
          var f = [
            [0, 1],
            [480, 1],
            [1024, 1],
          ];
          b.owlCarousel({
            items: 1,
            itemsCustom: f,
            autoPlay: e,
            addClassActive: !0,
            transitionStyle: "mkdTransition",
            autoHeight: !0,
            paginationSpeed: 500,
          });
        });
    }
    function i() {
      var b,
        c = a(".mkd-carousel-holder");
      c.length &&
        c.each(function () {
          var c = !0,
            d = 4e3,
            e = [
              [0, 1],
              [480, 2],
              [768, 3],
            ],
            f = a(this);
          b = f.children(".mkd-carousel");
          var g = a(this).find(".mkd-carousel-item-holder");
          if (b.hasClass("mkd-carousel-grid"))
            for (var h = 0; h < g.length; h += 2)
              g.slice(h, h + 2).wrapAll("<div class='item-inner'></div>");
          else {
            (g.wrap("<div class='item-inner'></div>"), (c = !1));
            var i = 6;
            (void 0 !== b.data("items-shown") &&
              (i = parseInt(b.data("items-shown"))),
              (e = [
                [0, 1],
                [480, 2],
                [768, 4],
                [1024, i],
              ]));
          }
          ("no" == b.data("autoplay") && (d = !1),
            f.waitForImages(function () {
              a(this).animate({ opacity: 1 }, 2200);
            }),
            b.owlCarousel({
              autoPlay: d,
              items: 3,
              itemsCustom: e,
              addClassActive: !0,
              pagination: c,
              navigation: !1,
              paginationSpeed: 400,
            }));
        });
    }
    function j() {
      var b = a(".mkd-pie-chart-holder, .mkd-pie-chart-with-icon-holder");
      b.length &&
        b.each(function () {
          var b = a(this),
            c = b.children(".mkd-percentage, .mkd-percentage-with-icon"),
            d = mkdGlobalVars.vars.mkdFirstMainColor;
          c.appear(
            function () {
              (k(b),
                c.css("opacity", "1"),
                c.easyPieChart({
                  barColor: d,
                  trackColor: "#efefef",
                  scaleColor: !1,
                  lineCap: "butt",
                  lineWidth: 10,
                  animate: 1500,
                  size: 142,
                }));
            },
            { accX: 0, accY: mkdGlobalVars.vars.mkdElementAppearAmount },
          );
        });
    }
    function k(a) {
      a.css("opacity", "1");
      var b = a.find(".mkd-to-counter"),
        c = parseFloat(b.text());
      b.countTo({ from: 0, to: c, speed: 1500, refreshInterval: 50 });
    }
    function l() {
      var b = a(".mkd-tabs");
      b.length &&
        b.each(function () {
          var b = a(this);
          (b.find(".mkd-tabs-nav a").each(function () {
            var b = a(this),
              c = b.attr("href"),
              d = a(c),
              e = c.substr(1, c.length - 1),
              f = Math.floor(1e4 * Math.random());
            d.length && (d.attr({ id: e + f }), b.attr({ href: c + f }));
          }),
            b.hasClass("mkd-horizontal")
              ? b.tabs()
              : b.hasClass("mkd-vertical") &&
                (b.tabs().addClass("ui-tabs-vertical ui-helper-clearfix"),
                b
                  .find(".mkd-tabs-nav > ul >li")
                  .removeClass("ui-corner-top")
                  .addClass("ui-corner-left")));
        });
    }
    function m() {
      var b = a(".mkd-tab-container");
      b.length &&
        b.each(function () {
          var b = a(this),
            c = b.attr("id"),
            d = "";
          (void 0 === b.data("icon-html") && "false" === b.data("icon-html")) ||
            (d = b.data("icon-html"));
          var e = b
            .parents(".mkd-tabs")
            .find(".mkd-tabs-nav > li > a[href=#" + c + "]");
          void 0 !== e && e.children(".mkd-icon-frame").append(d);
        });
    }
    function n() {
      var b = a(".mkd-custom-font-holder");
      b.length &&
        b.each(function () {
          var b,
            c,
            d = a(this),
            e = 1,
            f = 1;
          (mkd.windowWidth < 1200 && (e = 0.8),
            mkd.windowWidth < 1e3 && (e = 0.7),
            mkd.windowWidth < 768 && ((e = 0.6), (f = 0.7)),
            mkd.windowWidth < 600 && ((e = 0.5), (f = 0.6)),
            mkd.windowWidth < 480 && ((e = 0.4), (f = 0.5)),
            void 0 !== d.data("font-size") &&
              !1 !== d.data("font-size") &&
              ((b = parseInt(d.data("font-size"))),
              b > 70
                ? (b = Math.round(b * e))
                : b > 35 && (b = Math.round(b * f)),
              d.css("font-size", b + "px")),
            void 0 !== d.data("line-height") &&
              !1 !== d.data("line-height") &&
              ((c = parseInt(d.data("line-height"))),
              c > 70 && mkd.windowWidth < 1200
                ? (c = "1.2em")
                : c > 35 && mkd.windowWidth < 768
                  ? (c = "1.2em")
                  : (c += "px"),
              d.css("line-height", c)));
        });
    }
    function o() {
      a(".mkd-google-map").length &&
        a(".mkd-google-map").each(function () {
          var b,
            c = a(this);
          void 0 !== c.data("custom-map-style") &&
            (b = c.data("custom-map-style"));
          var d;
          void 0 !== c.data("color-overlay") &&
            !1 !== c.data("color-overlay") &&
            (d = c.data("color-overlay"));
          var e;
          void 0 !== c.data("saturation") &&
            !1 !== c.data("saturation") &&
            (e = c.data("saturation"));
          var f;
          void 0 !== c.data("lightness") &&
            !1 !== c.data("lightness") &&
            (f = c.data("lightness"));
          var g;
          void 0 !== c.data("zoom") &&
            !1 !== c.data("zoom") &&
            (g = c.data("zoom"));
          var h;
          void 0 !== c.data("pin") &&
            !1 !== c.data("pin") &&
            (h = c.data("pin"));
          var i;
          void 0 !== c.data("height") &&
            !1 !== c.data("height") &&
            (i = c.data("height"));
          var j;
          void 0 !== c.data("unique-id") &&
            !1 !== c.data("unique-id") &&
            (j = c.data("unique-id"));
          var k;
          void 0 !== c.data("scroll-wheel") && (k = c.data("scroll-wheel"));
          var l;
          (void 0 !== c.data("addresses") &&
            !1 !== c.data("addresses") &&
            (l = c.data("addresses")),
            p(
              b,
              d,
              e,
              f,
              k,
              g,
              "mkd-map-" + j,
              i,
              h,
              "map_" + j,
              "geocoder_" + j,
              l,
            ));
        });
    }
    function p(a, b, c, d, e, f, g, h, i, j, k, l) {
      if ("object" == typeof google) {
        var m,
          n = [
            {
              stylers: [
                { hue: b },
                { saturation: c },
                { lightness: d },
                { gamma: 1 },
              ],
            },
          ];
        m = a ? "mkd-style" : google.maps.MapTypeId.ROADMAP;
        var o = new google.maps.StyledMapType(n, { name: "Mkd Google Map" });
        k = new google.maps.Geocoder();
        var p = new google.maps.LatLng(-34.397, 150.644);
        isNaN(h) || (h += "px");
        var r = {
          zoom: f,
          scrollwheel: e,
          center: p,
          zoomControl: !0,
          zoomControlOptions: {
            style: google.maps.ZoomControlStyle.SMALL,
            position: google.maps.ControlPosition.RIGHT_CENTER,
          },
          scaleControl: !1,
          scaleControlOptions: {
            position: google.maps.ControlPosition.LEFT_CENTER,
          },
          streetViewControl: !1,
          streetViewControlOptions: {
            position: google.maps.ControlPosition.LEFT_CENTER,
          },
          panControl: !1,
          panControlOptions: {
            position: google.maps.ControlPosition.LEFT_CENTER,
          },
          mapTypeControl: !1,
          mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, "mkd-style"],
            style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
            position: google.maps.ControlPosition.LEFT_CENTER,
          },
          mapTypeId: m,
        };
        ((j = new google.maps.Map(document.getElementById(g), r)),
          j.mapTypes.set("mkd-style", o));
        var s;
        for (s = 0; s < l.length; ++s) q(l[s], i, j, k);
        document.getElementById(g).style.height = h;
      }
    }
    function q(a, b, c, d) {
      if ("" !== a) {
        var e =
            '<div id="content"><div id="siteNotice"></div><div id="bodyContent"><p>' +
            a +
            "</p></div></div>",
          f = new google.maps.InfoWindow({ content: e });
        d.geocode({ address: a }, function (d, e) {
          if (e === google.maps.GeocoderStatus.OK) {
            c.setCenter(d[0].geometry.location);
            var g = new google.maps.Marker({
              map: c,
              position: d[0].geometry.location,
              icon: b,
              title: a.store_title,
            });
            (google.maps.event.addListener(g, "click", function () {
              f.open(c, g);
            }),
              google.maps.event.addDomListener(window, "resize", function () {
                c.setCenter(d[0].geometry.location);
              }));
          }
        });
      }
    }
    function r() {
      var b = a(".mkd-accordion-holder");
      b.length &&
        b.each(function () {
          var b = a(this);
          if (
            (b.hasClass("mkd-accordion") &&
              b.accordion({
                animate: "swing",
                collapsible: !0,
                active: 0,
                icons: "",
                heightStyle: "content",
              }),
            b.hasClass("mkd-toggle"))
          ) {
            var c = a(this),
              d = c.find(".mkd-title-holder"),
              e = d.next();
            (c.addClass(
              "accordion ui-accordion ui-accordion-icons ui-widget ui-helper-reset",
            ),
              d.addClass(
                "ui-accordion-header ui-helper-reset ui-state-default ui-corner-top ui-corner-bottom",
              ),
              e
                .addClass(
                  "ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom",
                )
                .hide(),
              d.each(function () {
                var b = a(this);
                (b.on("mouseenter mouseleave", function () {
                  b.toggleClass("ui-state-hover");
                }),
                  b.on("click", function () {
                    (b.toggleClass(
                      "ui-accordion-header-active ui-state-active ui-state-default ui-corner-bottom",
                    ),
                      b
                        .next()
                        .toggleClass("ui-accordion-content-active")
                        .slideToggle(400));
                  }));
              }));
          }
        });
    }
    function s() {
      var b = a(".mkd-image-gallery");
      b.length &&
        b.each(function () {
          var b = a(this).children(".mkd-image-gallery-slider"),
            c = b.data("autoplay"),
            d = "slide" != b.data("animation") && b.data("animation"),
            e = "yes" == b.data("navigation"),
            f = "yes" == b.data("pagination");
          b.owlCarousel({
            singleItem: !0,
            autoPlay: 1e3 * c,
            navigation: e,
            transitionStyle: d,
            autoHeight: !0,
            pagination: f,
            slideSpeed: 600,
            navigationText: [
              '<span class="mkd-prev-icon"><i class="fa fa-angle-left"></i></span>',
              '<span class="mkd-next-icon"><i class="fa fa-angle-right"></i></span>',
            ],
          });
        });
    }
    function t() {
      var b = a(
        ".mkd-portfolio-list-holder-outer.mkd-ptf-standard, .mkd-portfolio-list-holder-outer.mkd-ptf-gallery",
      );
      b.length &&
        b.each(function () {
          var b = a(this);
          b.appear(function () {
            u(b);
          });
        });
    }
    function u(a) {
      var b = "";
      a.hasClass("mkd-ptf-has-filter") &&
        ((b = a.find(".mkd-portfolio-filter-holder-inner ul li").data("class")),
        (b = "." + b));
      var c = a.find(".mkd-portfolio-list-holder");
      c.mixItUp({
        callbacks: {
          onMixLoad: function () {
            c.find("article").css("visibility", "visible");
          },
          onMixStart: function () {
            c.find("article").css("visibility", "visible");
          },
          onMixBusy: function () {
            c.find("article").css("visibility", "visible");
          },
        },
        selectors: { filter: b },
        animation: { effects: "fade scale", duration: 300, easing: "ease-out" },
      });
    }
    function v() {
      var b = a(".mkd-portfolio-list-holder-outer.mkd-ptf-masonry");
      b.length &&
        b.each(function () {
          var b = a(this).children(".mkd-portfolio-list-holder"),
            c = b.find(".mkd-portfolio-list-masonry-grid-sizer").width();
          (x(c, b),
            w(b),
            a(window).resize(function () {
              (x(c, b), w(b));
            }));
        });
    }
    function w(a) {
      (a.animate({ opacity: 1 }),
        a.isotope({
          itemSelector: ".mkd-portfolio-item",
          masonry: { columnWidth: ".mkd-portfolio-list-masonry-grid-sizer" },
        }));
    }
    function x(a, b) {
      var c = b.find(".mkd-default-masonry-item"),
        d = b.find(".mkd-large-width-masonry-item"),
        e = b.find(".mkd-large-height-masonry-item"),
        f = b.find(".mkd-large-width-height-masonry-item");
      (c.css("height", a),
        d.css("height", a),
        mkd.windowWidth > 600
          ? (f.css("height", Math.round(2 * a)),
            e.css("height", Math.round(2 * a)))
          : (f.css("height", a), e.css("height", a)));
    }
    function y() {
      var b = a(".mkd-portfolio-list-holder-outer.mkd-ptf-pinterest");
      b.length &&
        b.each(function () {
          var b = a(this).children(".mkd-portfolio-list-holder");
          (z(b),
            a(window).resize(function () {
              z(b);
            }));
        });
    }
    function z(a) {
      (a.animate({ opacity: 1 }),
        a.isotope({
          itemSelector: ".mkd-portfolio-item",
          masonry: { columnWidth: ".mkd-portfolio-list-masonry-grid-sizer" },
        }));
    }
    function A() {
      var b = a(".mkd-portfolio-filter-holder.mkd-masonry-filter");
      b.length &&
        b.each(function () {
          var b = a(this),
            c = null;
          b.find("ul li").data("class");
          (b.find(".filter:first").addClass("current"),
            b.find(".filter").on("click", function () {
              var d = a(this);
              (clearTimeout(c),
                a(".isotope, .isotope .isotope-item").css(
                  "transition-duration",
                  "0.8s",
                ),
                (c = setTimeout(function () {
                  a(".isotope, .isotope .isotope-item").css(
                    "transition-duration",
                    "0s",
                  );
                }, 700)));
              var e = a(this).attr("data-filter");
              return (
                b
                  .siblings(".mkd-portfolio-list-holder-outer")
                  .find(".mkd-portfolio-list-holder")
                  .isotope({ filter: e }),
                b.find(".filter").removeClass("current"),
                d.addClass("current"),
                !1
              );
            }));
        });
    }
    function B() {
      var b = a(".mkd-portfolio-list-holder-outer.mkd-portfolio-slider-holder");
      b.length &&
        b.each(function () {
          var b = a(this),
            c = b.children(".mkd-portfolio-list-holder"),
            d = b.data("items"),
            e = [
              [0, 1],
              [480, 2],
              [768, 3],
              [1024, d],
            ];
          c.owlCarousel({
            autoPlay: 5e3,
            items: d,
            itemsCustom: e,
            pagination: !0,
            navigation: !0,
            slideSpeed: 600,
            transitionStyle: "fade",
            navigationText: [
              '<span class="mkd-prev-icon"><i class="fa fa-angle-left"></i></span>',
              '<span class="mkd-next-icon"><i class="fa fa-angle-right"></i></span>',
            ],
          });
        });
    }
    function C() {
      var b = a(".mkd-portfolio-list-holder-outer.mkd-ptf-load-more");
      b.length &&
        b.each(function () {
          var b,
            c,
            d = a(this),
            e = d.find(".mkd-portfolio-list-holder"),
            f = d.find(".mkd-ptf-list-load-more a");
          (void 0 !== d.data("max-num-pages") &&
            !1 !== d.data("max-num-pages") &&
            (c = d.data("max-num-pages")),
            f.on("click", function (g) {
              var h = E(d);
              if (
                ((b = h.nextPage),
                g.preventDefault(),
                g.stopPropagation(),
                b <= c)
              ) {
                var i = F(h);
                a.ajax({
                  type: "POST",
                  data: i,
                  url: mkdCoreAjaxUrl,
                  success: function (c) {
                    (b++, d.data("next-page", b));
                    var f = a.parseJSON(c),
                      g = D(f.html);
                    d.waitForImages(function () {
                      setTimeout(function () {
                        d.hasClass("mkd-ptf-masonry") ||
                        d.hasClass("mkd-ptf-pinterest")
                          ? e
                              .isotope()
                              .append(g)
                              .isotope("appended", g)
                              .isotope("reloadItems")
                          : e.mixItUp("append", g);
                      }, 400);
                    });
                  },
                });
              }
              b === c && f.hide();
            }));
        });
    }
    function D(b) {
      var c = a.trim(b),
        d = a(c),
        e = a();
      return (
        d.each(function (a, b) {
          1 === b.nodeType && (e = e.add(this));
        }),
        e
      );
    }
    function E(a) {
      var b = {};
      return (
        (b.type = ""),
        (b.columns = ""),
        (b.gridSize = ""),
        (b.orderBy = ""),
        (b.order = ""),
        (b.number = ""),
        (b.imageSize = ""),
        (b.filter = ""),
        (b.filterOrderBy = ""),
        (b.category = ""),
        (b.selectedProjectes = ""),
        (b.showLoadMore = ""),
        (b.titleTag = ""),
        (b.nextPage = ""),
        (b.maxNumPages = ""),
        void 0 !== a.data("type") &&
          !1 !== a.data("type") &&
          (b.type = a.data("type")),
        void 0 !== a.data("grid-size") &&
          !1 !== a.data("grid-size") &&
          (b.gridSize = a.data("grid-size")),
        void 0 !== a.data("columns") &&
          !1 !== a.data("columns") &&
          (b.columns = a.data("columns")),
        void 0 !== a.data("order-by") &&
          !1 !== a.data("order-by") &&
          (b.orderBy = a.data("order-by")),
        void 0 !== a.data("order") &&
          !1 !== a.data("order") &&
          (b.order = a.data("order")),
        void 0 !== a.data("number") &&
          !1 !== a.data("number") &&
          (b.number = a.data("number")),
        void 0 !== a.data("image-size") &&
          !1 !== a.data("image-size") &&
          (b.imageSize = a.data("image-size")),
        void 0 !== a.data("filter") &&
          !1 !== a.data("filter") &&
          (b.filter = a.data("filter")),
        void 0 !== a.data("filter-order-by") &&
          !1 !== a.data("filter-order-by") &&
          (b.filterOrderBy = a.data("filter-order-by")),
        void 0 !== a.data("category") &&
          !1 !== a.data("category") &&
          (b.category = a.data("category")),
        void 0 !== a.data("selected-projects") &&
          !1 !== a.data("selected-projects") &&
          (b.selectedProjectes = a.data("selected-projects")),
        void 0 !== a.data("show-load-more") &&
          !1 !== a.data("show-load-more") &&
          (b.showLoadMore = a.data("show-load-more")),
        void 0 !== a.data("title-tag") &&
          !1 !== a.data("title-tag") &&
          (b.titleTag = a.data("title-tag")),
        void 0 !== a.data("next-page") &&
          !1 !== a.data("next-page") &&
          (b.nextPage = a.data("next-page")),
        void 0 !== a.data("max-num-pages") &&
          !1 !== a.data("max-num-pages") &&
          (b.maxNumPages = a.data("max-num-pages")),
        b
      );
    }
    function F(a) {
      return {
        action: "mkd_core_portfolio_ajax_load_more",
        type: a.type,
        columns: a.columns,
        gridSize: a.gridSize,
        orderBy: a.orderBy,
        order: a.order,
        number: a.number,
        imageSize: a.imageSize,
        filter: a.filter,
        filterOrderBy: a.filterOrderBy,
        category: a.category,
        selectedProjectes: a.selectedProjectes,
        showLoadMore: a.showLoadMore,
        titleTag: a.titleTag,
        nextPage: a.nextPage,
      };
    }
    function G() {
      var b = a(".mkd-animate-list"),
        c = a(".mkd-no-animations-on-touch");
      b.length &&
        !c.length &&
        b.each(function () {
          var b = a(this),
            c = b.find("li");
          b.appear(
            function () {
              c.each(function (b) {
                var c = a(this);
                setTimeout(function () {
                  c.animate({ opacity: 1, top: 0 }, 200);
                }, 220 * b);
              });
            },
            { accX: 0, accY: mkdGlobalVars.vars.mkdElementAppearAmount },
          );
        });
    }
    function H() {
      a(".mkd-image-slider").length &&
        a(".mkd-image-slider").each(function () {
          var b = a(this),
            c = "",
            d = "",
            e = "",
            f = "",
            g = b.find(".mkd-slider-navigation a");
          (a(this).hasClass("with-thumbs")
            ? ((d = "thumbnails"), (e = !1), (f = !1), (c = "slide"))
            : ((d = !1), (e = !0), (f = g), (c = "fade")),
            b.waitForImages(function () {
              a(this).animate({ opacity: 1 }, 2200);
            }),
            b.find(".flexslider").flexslider({
              animation: c,
              controlNav: d,
              directionNav: e,
              customDirectionNav: f,
              animationLoop: !1,
              start: function (a) {
                (a
                  .find(".flex-control-nav .flex-active")
                  .parent("li")
                  .addClass("active-item")
                  .siblings()
                  .removeClass("active-item"),
                  mkd.modules.common.mkdInitParallax());
              },
              after: function (a) {
                a.find(".flex-control-nav .flex-active")
                  .parent("li")
                  .addClass("active-item")
                  .siblings()
                  .removeClass("active-item");
              },
            }),
            b
              .find(".flex-control-thumbs li")
              .append('<span class="mkd-image-slider-thumb-hover"></span>'));
        });
    }
    function I() {
      var b = a(".mkd-interactive-image.mkd-checkmark"),
        c = b.closest(".vc_row");
      c.length &&
        c.each(function () {
          var c = a(this);
          b.length &&
            b.each(function (d) {
              var e = a(this),
                f = c.find(b).length;
              (d >= f && (d -= f),
                e.appear(
                  function () {
                    a(this)
                      .find(".tick")
                      .delay(300 * d)
                      .animate({ width: "53px" }, 400);
                  },
                  { accX: 0, accY: mkdGlobalVars.vars.mkdElementAppearAmount },
                ));
            });
        });
    }
    function J() {
      var b = a(".mkd-separator-with-icon.mkd-animate");
      b.length &&
        b.each(function () {
          a(this).appear(
            function () {
              a(this).addClass("appeared");
            },
            { accX: 0, accY: mkdGlobalVars.vars.mkdElementAppearAmount },
          );
        });
    }
    function K() {
      var b = a(".mkd-image-with-hover-info");
      b.length &&
        b.each(function () {
          var b = a(this).find(".mkd-mask"),
            c = a(this).find(".mkd-info"),
            d = "";
          b.outerHeight() - 150 < c.outerHeight() &&
            ((d = c.outerHeight() + 150),
            b.css({ height: d + "px" }),
            b.css({ top: -d + "px" }));
        });
    }
    function L() {
      a(".mkd-social-network-icon").each(function () {
        var b = a(this);
        if (void 0 !== b.data("hover-color") && "" !== b.data("hover-color")) {
          var c = b.parent(),
            d = b.data("hover-color"),
            e = b.css("color");
          (c.on("mouseenter", function () {
            b.css("color", d);
          }),
            c.on("mouseleave", function () {
              b.css("color", e);
            }));
        }
      });
    }
    function M() {
      var b = a(".mkd-interactive-icon");
      b.length &&
        b.each(function () {
          var b,
            c,
            d,
            e = a(this);
          (e.animate({ opacity: 1 }, 1e3, "easeOutSine"),
            (b = e.find(".mkd-interactive-icon-title").outerHeight()),
            (c = e.find(".mkd-interactive-icon-initial-content").outerHeight()),
            (d =
              e.find(".mkd-interactive-icon-hover-content").outerHeight() + b),
            c < d &&
              e
                .find(".mkd-interactive-icon-inner")
                .css({ height: parseInt(d) + "px" }));
          var f = e.offset().top,
            g = e.find(".mkd-interactive-icon-title").offset().top,
            h = f - g - 10;
          (e
            .find(".mkd-interactive-icon-hover-content")
            .css({ top: parseInt(b) + "px" }),
            e.on("mouseenter", e, function () {
              (e
                .find(".mkd-interactive-icon-title")
                .css("-webkit-transform", "translateY(" + parseInt(h) + "px)"),
                e
                  .find(".mkd-interactive-icon-title")
                  .css("transform", "translateY(" + parseInt(h) + "px)"));
            }),
            e.on("mouseleave", e, function () {
              (e
                .find(".mkd-interactive-icon-title")
                .css("-webkit-transform", "translateY(0px)"),
                e
                  .find(".mkd-interactive-icon-title")
                  .css("transform", "translateY(0px)"));
            }));
        });
    }
    function N() {
      var b = a(".mkd-team");
      b.length &&
        b.each(function () {
          var b = a(this),
            c = b.find(".mkd-team-info"),
            d = b.find(".mkd-team-triangle "),
            e = c.offset().top - b.offset().top;
          d.css({ top: e - 12 + "px" });
          for (
            var f = [
                "blogger",
                "delicious",
                "deviantart",
                "dribbble",
                "facebook",
                "flickr",
                "googledrive",
                "instagram",
                "myspace",
                "picassa",
                "pinterest",
                "rss",
                "share",
                "skype",
                "spotify",
                "stumbleupon",
                "tumblr",
                "twitter",
                "linkedin",
                "wordpress",
                "youtube",
              ],
              g = f.length - 1;
            g >= 0;
            g--
          ) {
            var h = f[g];
            b.find('.mkd-icon-element[class*="' + h + '"]')
              .parent("a")
              .append('<span class="mkd-team-social-text">' + h + "</span>");
          }
        });
    }
    function O() {
      var b = a(".mkd-interactive-banner");
      b.length &&
        b.each(function () {
          var b = a(this),
            c = b.find(".mkd-interactive-banner-info"),
            d = b.find(".mkd-interactive-banner-triangle "),
            e = c.offset().top - b.offset().top;
          d.css({ top: e - 12 + "px" });
        });
    }
    function P() {
      var b = a(".mkd-video-box");
      b.length &&
        b.each(function () {
          var b = a(this),
            c = b.find(".mkd-video-box-text");
          b.waitForImages(function () {
            c.addClass("mkd-vtext-appear");
          });
        });
    }
    function Q() {
      var b = a(".mkd-fullwidth-slider-slides");
      b.length &&
        b.each(function () {
          var b = a(this);
          b.appear(
            function () {
              b.css("visibility", "visible");
            },
            { accX: 0, accY: mkdGlobalVars.vars.mkdElementAppearAmount },
          );
          var c = 600;
          (void 0 !== b.data("animation-speed") &&
            !1 !== b.data("animation-speed") &&
            (c = b.data("animation-speed")),
            b.owlCarousel({
              singleItem: !0,
              autoPlay: 5e3,
              addClassActive: !0,
              navigation: !1,
              transitionStyle: "fade",
              autoHeight: !0,
              pagination: !0,
              slideSpeed: c,
            }));
        });
    }
    var R = {};
    ((mkd.modules.shortcodes = R),
      (R.mkdInitCounter = b),
      (R.mkdInitProgressBars = e),
      (R.mkdInitCountdown = g),
      (R.mkdInitTestimonials = h),
      (R.mkdInitCarousels = i),
      (R.mkdInitPieChart = j),
      (R.mkdInitTabs = l),
      (R.mkdInitTabIcons = m),
      (R.mkdCustomFontResize = n),
      (R.mkdCounterResize = c),
      (R.mkdIconListResize = d),
      (R.mkdInitImageGallery = s),
      (R.mkdInitImageSlider = H),
      (R.mkdInitAccordions = r),
      (R.mkdShowGoogleMap = o),
      (R.mkdInitPortfolioListMasonry = v),
      (R.mkdInitPortfolioListPinterest = y),
      (R.mkdInitPortfolio = t),
      (R.mkdInitPortfolioMasonryFilter = A),
      (R.mkdInitPortfolioSlider = B),
      (R.mkdInitPortfolioLoadMore = C),
      (R.mkdInitListAnimation = G),
      (R.mkdInitInteractiveImage = I),
      (R.mkdInitIconSeparator = J),
      (R.mkdInitImageWithHoverInfo = K),
      (R.mkdInitSocialHover = L),
      (R.mkdInitInteractiveIcon = M),
      (R.mkdInitTeam = N),
      (R.mkdInitInteractiveBanner = O),
      (R.mkdInitVideoBoxHolderAppear = P),
      (R.mkdInitFullWidthSlider = Q),
      a(document).ready(function () {
        (b(),
          e(),
          g(),
          S().init(),
          h(),
          i(),
          j(),
          l(),
          m(),
          T().init(),
          n(),
          c(),
          d(),
          s(),
          H(),
          r(),
          o(),
          v(),
          y(),
          t(),
          A(),
          B(),
          C(),
          G(),
          I(),
          J(),
          K(),
          L(),
          P(),
          Q());
      }),
      a(window).resize(function () {
        (n(), c(), d(), v(), y(), K(), M(), N(), O());
      }),
      a(window).on("load", function () {
        (M(), N(), O());
      }));
    var S = (mkd.modules.shortcodes.mkdIcon = function () {
        var b = a(".mkd-icon-shortcode"),
          c = function (a) {
            a.hasClass("mkd-icon-animation") &&
              a.appear(
                function () {
                  a.parent(".mkd-icon-animation-holder").addClass(
                    "mkd-icon-animation-show",
                  );
                },
                { accX: 0, accY: mkdGlobalVars.vars.mkdElementAppearAmount },
              );
          },
          d = function (a) {
            if (void 0 !== a.data("hover-color")) {
              var b = function (a) {
                  a.data.icon.css("color", a.data.color);
                },
                c = a.find(".mkd-icon-element"),
                d = a.data("hover-color"),
                e = c.css("color");
              "" !== d &&
                (a.on("mouseenter", { icon: c, color: d }, b),
                a.on("mouseleave", { icon: c, color: e }, b));
            }
          },
          e = function (a) {
            if (void 0 !== a.data("hover-background-color")) {
              var b = function (a) {
                  a.data.icon.css("background-color", a.data.color);
                },
                c = a.data("hover-background-color"),
                d = a.find(".mkd-background").css("background-color");
              "" !== c &&
                (a.on(
                  "mouseenter",
                  { icon: a.find(".mkd-background"), color: c },
                  b,
                ),
                a.on(
                  "mouseleave",
                  { icon: a.find(".mkd-background"), color: d },
                  b,
                ));
            }
          },
          f = function (a) {
            if (void 0 !== a.data("hover-border-color")) {
              var b = function (a) {
                  a.data.icon.css("border-color", a.data.color);
                },
                c = a.data("hover-border-color"),
                d = a.find(".mkd-background").css("borderTopColor");
              "" !== c &&
                (a.on(
                  "mouseenter",
                  { icon: a.find(".mkd-background"), color: c },
                  b,
                ),
                a.on(
                  "mouseleave",
                  { icon: a.find(".mkd-background"), color: d },
                  b,
                ));
            }
          };
        return {
          init: function () {
            b.length &&
              b.each(function () {
                (c(a(this)), d(a(this)), e(a(this)), f(a(this)));
              });
          },
        };
      }),
      T = (mkd.modules.shortcodes.mkdButton = function () {
        var b = a(".mkd-btn"),
          c = function (a) {
            if (void 0 !== a.data("hover-color")) {
              var b = function (a) {
                  a.data.button.css("color", a.data.color);
                },
                c = a.css("color"),
                d = a.data("hover-color");
              (a.on("mouseenter", { button: a, color: d }, b),
                a.on("mouseleave", { button: a, color: c }, b));
            }
          },
          d = function (a) {
            if (void 0 !== a.data("hover-bg-color")) {
              var b = function (a) {
                  a.data.button.css("background-color", a.data.color);
                },
                c = a.css("background-color"),
                d = a.data("hover-bg-color");
              (a.on("mouseenter", { button: a, color: d }, b),
                a.on("mouseleave", { button: a, color: c }, b));
            }
          },
          e = function (a) {
            if (void 0 !== a.data("hover-border-color")) {
              var b = function (a) {
                  a.data.button.css("border-color", a.data.color);
                },
                c = a.css("borderTopColor"),
                d = a.data("hover-border-color");
              (a.on("mouseenter", { button: a, color: d }, b),
                a.on("mouseleave", { button: a, color: c }, b));
            }
          },
          f = function (a) {
            if (
              a.hasClass("mkd-btn-icon") &&
              void 0 !== a.data("between-hover-border-color")
            ) {
              var b = function (a) {
                  a.data.iconHolder.css("border-color", a.data.color);
                },
                c = a.find(".mkd-btn-text"),
                d = c.css("borderRightColor"),
                e = a.data("between-hover-border-color");
              (a.on("mouseenter", { iconHolder: c, color: e }, b),
                a.on("mouseleave", { iconHolder: c, color: d }, b));
            }
          };
        return {
          init: function () {
            b.length &&
              b.each(function () {
                (c(a(this)), d(a(this)), e(a(this)), f(a(this)));
              });
          },
        };
      });
  })(jQuery),
  (function (a) {
    "use strict";
    function b() {
      a(document).on(
        "click",
        ".mkd-quantity-minus, .mkd-quantity-plus",
        function (b) {
          b.stopPropagation();
          var c,
            d = a(this),
            e = d.siblings(".mkd-quantity-input"),
            f = parseFloat(e.data("step")),
            g = parseFloat(e.data("max")),
            h = !1,
            i = parseFloat(e.val());
          (d.hasClass("mkd-quantity-minus") && (h = !0),
            isNaN(i) && (i = 0),
            h
              ? ((c = i - f), c >= 1 ? e.val(c) : e.val(1))
              : ((c = i + f),
                void 0 === g ? e.val(c) : c >= g ? e.val(g) : e.val(c)),
            e.trigger("change"));
        },
      );
    }
    function c() {
      (a(".woocommerce-ordering .orderby").length ||
        a("#calc_shipping_country").length) &&
        (a(".woocommerce-ordering .orderby").select2({
          minimumResultsForSearch: 1 / 0,
        }),
        a("#calc_shipping_country").select2());
    }
    function d() {
      var b = a(
        ".mkd-woocommerce-single-page .images .woocommerce-product-gallery__image",
      );
      b.length &&
        b.each(function () {
          (a(this)
            .children("a")
            .attr("data-rel", "prettyPhoto[woo_single_pretty_photo]"),
            a("a[data-rel]").each(function () {
              a(this).attr("rel", a(this).data("rel"));
            }),
            a("a[rel^='prettyPhoto']").prettyPhoto({
              animation_speed: "normal",
              slideshow: !1,
              autoplay_slideshow: !1,
              opacity: 0.8,
              show_title: !0,
              allow_resize: !0,
              horizontal_padding: 0,
              default_width: 650,
              default_height: 400,
              counter_separator_label: "/",
              theme: "pp_default",
              hideflash: !1,
              wmode: "opaque",
              autoplay: !0,
              modal: !1,
              overlay_gallery: !1,
              keyboard_shortcuts: !0,
              deeplinking: !1,
              social_tools: !1,
            }));
        });
    }
    a(document).ready(function () {
      (b(), c(), d());
    });
  })(jQuery),
  (function (a) {
    "use strict";
    function b() {
      a(".mkd-ptf-list-load-more").length &&
        a(".mkd-ptf-list-load-more").each(function () {
          a(this).find(".mkd-btn").animate({ opacity: 1 }, 200);
        });
    }
    ((mkd.modules.portfolio = {}),
      a(window).on("load", function () {
        (b(), c().init());
      }));
    var c = function () {
      var b = a(
        ".mkd-follow-portfolio-info .small-images.mkd-portfolio-single-holder .mkd-portfolio-info-holder, .mkd-follow-portfolio-info .small-slider.mkd-portfolio-single-holder .mkd-portfolio-info-holder",
      );
      if (b.length)
        var c = b.parent(),
          d = c.offset().top,
          e = c.height(),
          f = a(".mkd-portfolio-media"),
          g = f.height(),
          h = a(".header-appear, .mkd-fixed-wrapper"),
          i = h.length ? h.height() : 0;
      var j = function () {
          b.length &&
            g > e &&
            mkd.scroll > d &&
            b.animate({
              marginTop:
                mkd.scroll - d + mkdGlobalVars.vars.mkdAddForAdminBar + i + 20,
            });
        },
        k = function () {
          b.length &&
            g > e &&
            (mkd.scroll > d
              ? mkd.scroll + i + mkdGlobalVars.vars.mkdAddForAdminBar + e + 20 <
                d + g
                ? (a(".header-appear, .mkd-fixed-wrapper").length &&
                    (i = a(".header-appear, .mkd-fixed-wrapper").height()),
                  b
                    .stop()
                    .animate({
                      marginTop:
                        mkd.scroll -
                        d +
                        mkdGlobalVars.vars.mkdAddForAdminBar +
                        i +
                        20,
                    }),
                  (i = 0))
                : b.stop().animate({ marginTop: g - e })
              : b.stop().animate({ marginTop: 0 }));
        };
      return {
        init: function () {
          (j(),
            a(window).scroll(function () {
              k();
            }));
        },
      };
    };
  })(jQuery));
