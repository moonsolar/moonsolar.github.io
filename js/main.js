$(function() {
    'use strict';
    var toggleMenu = function() {
        var aside = $('.js-probootstrap-aside'),
            main = $('.js-probootstrap-main');
        $('.js-probootstrap-toggle').on('click', function(e) {
            aside.addClass('active');
            main.addClass('mobile-open');
            e.preventDefault();
        });
        $('.js-probootstrap-close-menu').on('click', function(e) {
            aside.removeClass('active');
            main.removeClass('mobile-open');
            e.preventDefault();
        });

        $(document).mouseup(function(e) {
            var container = $(".probootstrap-aside");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                aside.removeClass('active');
                main.removeClass('mobile-open');
            }
        });

    };

    toggleMenu();
});

var loadPageWithTypeName = function(json) {

  $('#container').waterfall({
    itemCls: 'card',
    colWidth: 300,
    gutterWidth: 30,
    gutterHeight: 30,
    isFadeIn: true,
    maxPage: 1,
    checkImagesLoaded: false,
    path: function(page) {
      if (page == 1) {
          return "http://sixplus.biz/" + json;
      } else {
        return ;
      }
    }
  });
}

$('.menuA').on("click", function() {
  var json = $(this).attr("json");

  loadPageWithTypeName(json)
});
