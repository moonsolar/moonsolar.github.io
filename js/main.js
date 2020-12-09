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
  $('#container').innerHTML = '';
  $('#container').waterfall({
    itemCls: 'card',
    colWidth: 180,
    gutterWidth: 4,
    gutterHeight: 4,
    isFadeIn: true,
    maxPage: 1,
    checkImagesLoaded: false,
    path:
    function(page) {
      if (page == 1) {
          return "https://moonsolar.github.io/" + json;
      } else {
        return ;
      }
    }
  });
};

$('.subMenu').on("click", function() {
  var divEl = document.getElementById("scrollmenubar");

  // Make it active
  var subItems = divEl.getElementsByTagName("span");
  var i;
  for (i = 0; i < subItems.length; i++) {
    subItems[i].classList.remove("active");
  }

  // Scroll to left
  var selectedTrEl = $(this)[0];
  var scrollTo = selectedTrEl.offsetLeft;
  selectedTrEl.classList.add("active");

  // $('.scrollmenu')
  $(divEl).animate( { scrollLeft: scrollTo - 80 }, 300);

  // Reload data
  var json = "products/" + $(this).text() + ".json";

  loadPageWithTypeName(json);
});
