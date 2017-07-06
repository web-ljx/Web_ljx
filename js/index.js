
$(document).ready(function(){


// 音乐按钮


	var MUS=$('#music_bg').get(0);

	touch.on('.music_btn','tap',function(){
		if(	MUS.paused){

			$(".music_btn").addClass("animate");

			MUS.play();	
		}else{
			
			$(".music_btn").removeClass("animate");

			MUS.pause();
		}
	})




// 上滑屏 翻页

	var pageIndex = 0 ;

	var pageNum = $(".page").length-1;

	touch.on('#wrap', 'swipeup', function(){

		if (pageIndex < pageNum) {

			$('.page').eq(pageIndex).addClass('pageUp')
			$('.page').eq(pageIndex).find('.hide').addClass('dh');
	// alert("aaa");
			pageIndex = pageIndex + 1 ;		

			$('.page').eq(pageIndex).removeClass('pageDown')
			$('.page').eq(pageIndex).find('.hide').removeClass('dh');

				if(pageIndex == pageNum){ 
	            	$('.arrow').hide();
	       		}

		}

	})

// 下滑屏 翻页
	touch.on('#wrap', 'swipedown', function(){

		if (pageIndex > 0) {

			$('.page').eq(pageIndex).addClass('pageDown');
			$('.page').eq(pageIndex).find('.hide').addClass('dh');
			pageIndex = pageIndex - 1;

			$('.page').eq(pageIndex).removeClass('pageUp');
			$('.page').eq(pageIndex).find('.hide').removeClass('dh');
		}

	})









})