$(function(){
	let one=$('.carousel-inner').hasClass('carousel-inner'),
	two=$('.products').hasClass('products'),
	three=$('.companyCount').hasClass('companyCount'),
	four=$('.joinUs').hasClass('joinUs'),
	five=$('.contactus').hasClass('contactus'),
	last=$('.centerLeft').hasClass('centerLeft'),
	details=$('.details-left').hasClass('details-left');
	
	function nav(){
		function fun(n){
			$('#nav ul').children('li').eq(n).children('a').css({'color':'#CDA118','border-bottom':'2px solid #cda118'});
		}
		if (one) {
			fun(0);
		}
		if (two) {
			fun(1);
		}
		if (three) {
			fun(2)
		}
		if (four) {
			fun(3)
		}
		if (five) {
			fun(4)
		}
		if (last) {
			fun(5)
		}
	}
	nav();
	$('#nav ul').children('li').mouseover(function(){
		$(this).children('a').css({'color':'#CDA118','border-bottom':'2px solid #cda118'}).parent('li').siblings('li').children('a').css({'color':'#ffffff','border-bottom':''});
	}).mouseout(function(){
		$(this).children('a').css({'color':'#ffffff','border-bottom':''});
		nav();
	});

	//屏幕768px时 导航左右按扭
	$('.nav1 .left span').click(function(){
		$('#nav .nav1 .ul').addClass('ul-left').removeClass('ul-right');
	});
	$('.nav1 .right span').click(function(){
		$('#nav .nav1 .ul').addClass('ul-right').removeClass('ul-left');
	});

	if (one || two || details) {
		$('.footer').css('display','none');
		$(window).scroll(function(){
						if ($('.footer').offset().top-$(window).scrollTop()<$(window).height()) {
							$('.footer').stop(true).fadeIn('slow');
					}else {
						$('.footer').stop(true).fadeOut('slow');
					}
				});
	}else {
		$('.footer').css('display','block');
	}

	// $(window).scroll(function(){
	// 	var h=$('.header').height(),
	// 	    h2=$(window).scrollTop();
	// 	    if (h2>h) {
	// 	    	$('.header').addClass('headerTop');
	// 	    	$('.sign-register').addClass('signTop');
	// 	    }
	// 	    if (h2<=0) {
	// 	    	$('.header').removeClass('headerTop');
	// 	    	$('.sign-register').removeClass('signTop')
	// 	    }
	// });
	// 
	// 
	// 
	$('.footer dl>dd').mouseover(function(){
		$(this).addClass('ddLeft');
	}).mouseout(function(){
		$(this).removeClass('ddLeft');
	});


});