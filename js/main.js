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

$('#type').on("click", function() {
  var json = $(this).attr("json");
  $('#container').waterfall({
    itemCls: 'card',
    colWidth: 300,
    gutterWidth: 15,
    gutterHeight: 15,
    isFadeIn: false,
    checkImagesLoaded: false,
    path: function(page) {
        return "http://sixplus.biz/products/iPhone Case.data";
    }
  });
});
