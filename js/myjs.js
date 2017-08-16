// JavaScript Document
$(function(){
	//首屏点more跳转
	$('.screen1 .span1').click(function(e) {
		$('.gps li').eq(1).addClass('current').siblings().removeClass('current');
		$('.screen').stop().delay(100).animate({top:-100+'%'});
		$('.screen>div').eq(1).removeClass('no').siblings().addClass('no');
    });		
	$('.screen1').removeClass('no')	
	//$('.screen').css({"top":-400+"%"});
	var num=0;
	var timer=setTimeout;
	
	//gps点击事件；
	$('.gps li').click(function(e) {
	var index=$(this).index();
	$(this).addClass('current').siblings().removeClass('current');
	$('.screen').stop().animate({'top':index*-100+'%'},500)
	num=index;
	$('.screen>div').eq(num).removeClass('no').siblings().addClass('no');
    });
	
	//鼠标滚动事件
	$(document).mousewheel(function(e,d){
		clearTimeout(timer)
		timer=setTimeout(function(){
			num-=d;
			if(num>6){num=6};
			if(num<0){num=0};
			//console.log(num)
			
			$('.screen').stop().animate({'top':num*-100+'%'},500);
			
			$('.gps li').eq(num).addClass('current').siblings().removeClass('current');
			$('.screen>div').eq(num).removeClass('no').siblings().addClass('no');
		},300);
	});
	
	//音乐事件
	;(function(){
		$('.music').toggle(function() {
			$('audio').get(0).muted = true;
		}, function() {
			$('audio').get(0).muted = false;
		});
	})();
	
	//二屏点击放大；
	$('.screen2 ul li').click(function(e) {
        $(this).addClass('cur').siblings().removeClass('cur').hide();
		$('.screen2 span').fadeIn(4000);
    });	
	$('.screen2 span').click(function(e) {
        $('.screen2 ul li').removeClass('cur').siblings().fadeIn();
		$(this).stop().fadeOut(20);
    });	
	
	//三屏轮播
 	$(function() {
    	var num = 1;
        var timer = null;
        var shijian = 3000;
        $('.screen3 .all ul').css('left',-1*1000);
		
        $('.screen3 .all').hover(function() {
        	clearInterval(timer);
        	$('.screen3 .all span').show();
        }, function() {
        	clearInterval(timer);
        	  timer = setInterval(sport, shijian);
        	  $('.screen3 .all span').hide();
        });

        $('.screen3 .all .right').click(function(event) {
        	num++;
        	if(num>7){
	            $('.screen3 .all ul').stop().animate({left:-num*1000},700,function(){
					$('.screen3 .all ul').css('left',-1*1000);
				});
				num =1;
        	}else{
	            $('.screen3 .all ul').stop().animate({left:-num*1000},700);
        	}
        });

        $('.screen3 .all .left').click(function(event) {
        	num--;
        	if(num<1){
	            $('.screen3 .all ul').stop().animate({left:-num*1000},700,function(){
					$('.screen3 .all ul').css('left',-7*1000);
				});
				num =7;
        	}else{
	            $('.screen3 .all ul').stop().animate({left:-num*1000},700);
        	}
        });
        //
        timer = setInterval(sport, shijian);
        function sport() {
           $('.all .right').click();
        }
    });
	
	//app
	$(function(){
		var num=0
		$('.circle .right').click(function(e) {
			num++;
			if(num>5){num=5}
			if (num>-1) {
				$('.circle .left').fadeTo(300,1)
				$('.shadow').fadeTo(1000,1)
			}
			if (num>4) {
				$('.circle .right').fadeTo(300,0)
				$('.shadow01').fadeTo(300,0)
			}
			$('.swiper-container ul').stop().animate({left:-179*num+'px'},600)
			$('.swiper-container ul li').eq(num+1).addClass('current').siblings().removeClass('current')
			$('.phone .GUI').css('background', 'url(images/red0'+(num+2)+'.png) no-repeat center center');
			if(num==0){
			$('.phone .GUI').css('background', 'url(images/app12.gif) no-repeat center center');
			}
		});

		$('.circle .left').click(function(e) {
			num--
			if(num<-1){
				num=-1
			}
			if (num<0) {
				$('.circle .left').fadeTo(300,0)
				$('.shadow').fadeTo(300,0)
			}
			if (num<5) {
				$('.circle .right').fadeTo(300,1)
				$('.shadow01').fadeTo(1000,1)
			}
			$('.swiper-container ul').stop().animate({left:-179*num+'px'},600)
			$('.swiper-container ul li').eq(num+1).stop().addClass('current').siblings().stop().removeClass('current')

			$('.phone .GUI').css('background', 'url(images/red0'+(num+2)+'.png) no-repeat center center');
			if(num==0){
			$('.phone .GUI').css('background', 'url(images/app12.gif) no-repeat center center');
			}
		});

		$('.swiper-container ul li img').faceCursor();
	});

	
	
	//screen05
	$('.screen5 .web li').hover(function(e) {
		$(this).children('.a1').stop().fadeTo(500,0.8);
		$(this).children('.a2').stop().animate({bottom:70},500);
    },function(e){ 
		$(this).children('.a1').stop().fadeTo(500,0);
		$(this).children('.a2').stop().animate({bottom:-65},500);
	});	
	
	//screen06	
	$('.screen6 ol li').hover(function(e) {
        $(this).addClass('animated rubberBand');
    },function(e){ 
        $(this).removeClass('animated rubberBand');
	});
	
	//screen7
	//screen08
	$('.screen7 ul li').hover(function(e) {
		var index = $(this).index();
        $('.screen7 section').eq(index).css('display','block').animate({marginTop:46+'px'},1000);
    });		
});
	
		


	





