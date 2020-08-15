$(function(){

	'use strict';

	var carousel  = function() {
		$('.owl-carousel').owlCarousel({
			loop: true,
			margin: 10,
			nav: true,
			stagePadding: 5,
			navText: ['<span class="icon-chevron-left">', '<span class="icon-chevron-right">'],
			responsive:{
				0:{
					items: 1
				},
				600:{
					items: 2
				},
				1000:{
					items: 3
				}
			}
		});
	}
	carousel();

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

	var contentWayPoint = function() {
		var i = 0;
		jQuery('.probootstrap-animate').waypoint( function( direction ) {

			if( direction === 'down' && !jQuery(this.element).hasClass('probootstrap-animated') ) {

				i++;

				jQuery(this.element).addClass('item-animate');
				setTimeout(function(){

					jQuery('body .probootstrap-animate.item-animate').each(function(k){
						var el = jQuery(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn probootstrap-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft probootstrap-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight probootstrap-animated');
							} else {
								el.addClass('fadeInUp probootstrap-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});

				}, 100);

			}

		} , { offset: '95%' } );
	};
	// contentWayPoint();

	if ($('.probootstrap-main').length > 0 ) {
		$('.probootstrap-main').imagesLoaded( {

		  },
		  function() {
		  	if ($('.card').length > 0 ) {
		    	// $('.card').addClass('img-loaded');
		    }
		  }
		).progress( function( instance, image ) {
    var result = image.isLoaded;
		$('.card').addClass('img-loaded')
	});
	}



});


$(document).ready(function () {
                var imgsObj = $('.card img');//需要放大的图像
                if(imgsObj){
                    $.each(imgsObj,function(){
                        $(this).click(function(){

                            var currImg = $(this);
                            coverLayer(1);
                            var tempContainer = $('<div class=\'tempContainer\'></div>');//图片容器

                            with(tempContainer){//width方法等同于$(this)
                                appendTo("body");
                                var windowWidth=$(window).width();
                                var windowHeight=$(window).height();
                                //获取图片原始宽度、高度

                                var orignImg = new Image();
                                orignImg.src =currImg.attr("src") ;
                                var currImgWidth= orignImg.width;
                                var currImgHeight = orignImg.height;
                                if(currImgWidth<windowWidth){//为了让图片不失真，当图片宽度较小的时候，保留原图
                                    if(currImgHeight<windowHeight){
                                        var topHeight=(windowHeight-currImgHeight)/2;
                                        if(topHeight>35){/*此处为了使图片高度上居中显示在整个手机屏幕中：因为在android,ios的微信中会有一个title导航，35为title导航的高度*/
                                            topHeight=topHeight-35;
                                            css('top',topHeight);
                                        }else{
                                            css('top',0);
                                        }
                                        html('<img border=0 src=' + currImg.attr('src') + '/>');
                                    }else{
                                        css('top',0);
                                        html('<img border=0 src=' + currImg.attr('src') + ' height='+windowHeight+'/>');
                                    }
                                }else{
                                    var currImgChangeHeight=(currImgHeight*windowWidth)/currImgWidth;
                                    if(currImgChangeHeight<windowHeight){
                                        var topHeight=(windowHeight-currImgChangeHeight)/2;
                                        if(topHeight>35){
                                            topHeight=topHeight-35;
                                            css('top',topHeight);
                                        }else{
                                            css('top',0);
                                        }
                                        html('<img border=0 src=' + currImg.attr('src') + ' width='+windowWidth+';/>');
                                    }else{
                                        css('top',0);
                                        html('<img border=0 src=' + currImg.attr('src') + ' width='+windowWidth+'; height='+windowHeight+'/>');
                                    }
                                }
                            }
                            tempContainer.click(function(){
                                $(this).remove();
                                coverLayer(0);
                            });
                        });
                    });
                }
                else{
                    return false;
                }
                //使用禁用蒙层效果
                function coverLayer(tag){
                    with($('.over')){
                        if(tag==1){
														css('width',$(document).width());
                            css('height',$(document).height());
                            css('display','block');
                            css('opacity',1);
                            css("background-color","rgba(0,0,0,0.7)" );  //蒙层透明度
                        }
                        else{
                            css('display','none');
                        }
                    }
                }
            });
