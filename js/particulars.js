var u=0,
time;
$(function(){
	clearInterval(time);
	show();
	showTime();
	$('.tab,.ig .img').hover(function(){
		u=$(this).index();
		show();
		clearInterval(time);
	},function(){
		showTime();
	});
	$('.btn1').click(function(){
		clearInterval(time);
		if (u==0) {
			u=5;
		}
		u--;
		show();
		showTime();
	});
	$('.btn2').click(function(){
		clearInterval(time);
		if (u==4) {
			u=-1
		}
		u++;
		show();
		showTime();
	});

	$('.text').val('1');
	$('.minus,.add').click(function(){
		let text=$('.text').val();
		if ($(this).hasClass('minus')) {
			if (text<=1) {
				
				$(this).css({'color':'#CCCCCC','border':'1px solid #CCCCCC'});
			}else if(text>1) {
				
				$(this).css({'color':'#666666','border':'1px solid #666666'});
				$('.text').val(--text);
			}
			btn();
		}
		if ($(this).hasClass('add')) {
			$('.text').val(++text);
			$(this).siblings('button').css({'border':'1px solid #666666','color':'#666666'});
			btn();
		}
	});
	$('.text').blur(function(){
		btn();
	});
	function btn(){
		let text=$('.text').val();
		if(text<=1) {
			$('.minus').attr('disabled','trur');
			$('.minus').css({'color':'#CCCCCC','border':'1px solid #CCCCCC'});
		}
		if(text>1) {
			$('.minus').removeAttr("disabled");
		}
	}
	


});
function show(){
	$('.img').eq(u).stop().fadeIn().siblings().stop().fadeOut();
	$('.tab').eq(u).stop().addClass('bg').siblings().stop().removeClass('bg');
}
function showTime(){
	time=setInterval(function(){
		u++;
		if (u==5) {
			u=0;
		}
		show();
	},3000);
}