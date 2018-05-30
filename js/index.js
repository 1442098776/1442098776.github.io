var u=0;
var timer1;
// 轮翻图
$(function(){
	$('.carousel').carousel({
	    interval: 3000
	});

    // 鼠标经过图标时图片的变化
	$('.count>ul').mouseover(function(){
		$(this).find('img').eq(0).css('display','none');
		$(this).find('img').eq(1).css('display','block');
	}).mouseout(function() {
		$(this).find('img').eq(0).css('display','block');
		$(this).find('img').eq(1).css('display','none');
	});;
    

           // 中部轮翻图
	      $(".ig").eq(0).show().siblings().hide();
	      ShowTime1();
	      $(".tab").hover(function(){
	          u=$(this).index()
	          Show1();
	          clearInterval(timer1);
	     },function(){
	      ShowTime1();
	     });
	     $(".btn1 img").click(function(){
	      clearInterval(timer1);
	      if(u==0) {
	          u=5;
	      }
	      u--;
	      Show1();
	      ShowTime1();
	     });
	     $(".btn2 img").click(function(){
	      clearInterval(timer1);
	      if(u==4) {
	          u=-1;
	      }
	      u++;
	      Show1();
	      ShowTime1();
	     });


          // 点击左右按扭时图片的移动
	     var tLen = 0, 
	     		vNum = 4, 
	     		mNum = 1, 
	     		mTime = 500, 
	     		iShow = $(".brand2-count ul"),
	     		iItems = $(".brand2-count ul li"),
	     		mLen = iItems.eq(0).outerWidth(true) * mNum, 
	     		cLen = (iItems.length - vNum) * iItems.eq(0).outerWidth(true); 

	     iShow.css({width:iItems.length*iItems.eq(0).outerWidth(true)+'px'});
	     //下一张
	     $(".brand2-count .honor-left").on({
	     	click:function(){
	     			if(tLen < cLen){
	     				if((cLen - tLen) > mLen){
	     					iShow.animate({left:"-=" + mLen + "px"}, mTime);
	     					tLen += mLen;
	     				}else{
	     					iShow.animate({left:"-=" + (cLen - tLen) + "px"}, mTime);
	     					tLen += (cLen - tLen);
	     				}
	     			}
	     	}
	     });
	     //上一张
	     $(".brand2-count .honor-right").on({
	     	click:function () {
	     		if(tLen > 0){
	     			if(tLen > mLen){
	     				iShow.animate({left: "+=" + mLen + "px"}, mTime);
	     				tLen -= mLen;
	     			}else{
	     				iShow.animate({left: "+=" + tLen + "px"}, mTime);
	     				tLen = 0;
	     			}
	     		}
	     	}
	     });



         // 加载页面时，滚动页面时把没有显示的div显示出来
         
         $('.brand,.development,.more').addClass('section');
	     $(window).scroll(function(){
	     	$('.section').each(function(index,i){
	     		if ($(this).offset().top-$(window).scrollTop()<$(window).height()/2) {
	     			$(this).addClass('section1').removeClass('section');
	     		}else {
	     			$(this).removeClass('section1').addClass('section');
	     		}
	     	});
	     });

        
            // document的宽度大于500px时.more的类名做的效果
	     	if ($(document).width()>500) {
	     		var moreH=$('.more').outerHeight(true);
	     		$('.more').before().css('height',moreH);
	     		$(window).resize(function(){
	     			$('.more').before().css('height',moreH);
	     		});
	     	}




	     	// 鼠标经过.more-nav下面的div时做的效果
	     	var one=$('.carousel-inner').hasClass('carousel-inner');
	     	if (one) {
	     		$('.more-nav>div').children('div').eq(1).css('background-color','#CDA118').children('a').css('color',' #242626');
	     	}
	     	$('.more-nav>div').children('div').mouseover(function(){
	     		$(this).css('background-color','#CDA118').children('a').css('color',' #242626');
	     		$(this).siblings('div').css('background-color','').children('a').css('color','#ffffff');
	     	});
	     	// .mouseout(function(){
	     	// 	$(this).css('background-color','').children('a').css('color','#ffffff');
	     	// 	if (one) {
	     	// 	$('.more-nav>div').children('div').eq(1).css('background-color','#CDA118').children('a').css('color',' #242626');
	     	// }
	     	// });

            

});

function Show1(){
        $(".ig").eq(u).fadeIn(300).siblings().fadeOut(300);
        $(".tab").eq(u).addClass("bg").siblings().removeClass("bg");
}
function ShowTime1(){
    timer1=setInterval(function(){
        u++;
        if(u==5){
            u=0;
        }
        Show1();
    },3000);}



    // var speed=20;
    // var tab=document.getElementById("demo");
    // var tab1=document.getElementById("demo1");
    // var tab2=document.getElementById("demo2");
    // var lt=document.getElementById("lt");
    // var rt=document.getElementById("rt");
    // tab2.innerHTML=tab1.innerHTML;
    // function marquee(){
    // if(tab2.offsetWidth-tab.scrollLeft<=0)
    // {tab.scrollLeft=0}
    // else
    // {tab.scrollLeft++;}
    // }
    // var timer=setInterval(marquee,speed);
    // tab.onmouseover=function(){clearInterval(timer)};
    // tab.onmouseout=function(){timer=setInterval(marquee,speed)}


    // rt.onmouseout=function(){timer=setInterval(marquee,speed)}; //由于设置了点击图标的的时候清除定时器，所以这里必须在移开鼠标的时候開始定时器
    // lt.onmouseout=function(){timer=setInterval(marquee,speed)};


    // lt.onclick=function(){      //点击左图标时候执行
    // clearInterval(timer);   //清除定时器
    // if(tab.scrollLeft>=1170){tab.scrollLeft=0;}  //当层往左移动的像素大于1440的时候，scrillLeft返回0
    // else{tab.scrollLeft+=305} //不断的往左滚
    // }


    // rt.onclick=function(){ //点击右边鼠标的时候
    // clearInterval(timer);//清除定时器
    // if(tab.scrollLeft==0){tab.scrollLeft=1440;} //scroll为0的时候（这里必须注意，if里面是用“==”，是对照的意思，{}里面的“=”是赋值的意思，不能弄混），scrollLeft返回0
    // else if(tab.scrollLeft<=-1170){tab.scrollLeft=0;}//当scrollLeft少于1440的时候，scrollLeft返回0，同一时候）if（）{}         else{}之间是不存在不论什么标记符号的，这是格式

    // else{tab.scrollLeft-=305;}
    // }





