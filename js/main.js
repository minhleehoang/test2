jQuery(document).ready(function(){
	$('.back-to-top').click(function(){
		$('body,html').animate({
			scrollTop:0
		},800);
		return false;
	});
	$('.meme-item').each(function(index){
		if(index % 3 == 0 ){
			$(this).css('margin-left',0);
		}else{
			$(this).css('margin-left','15px');
		}
	});
	$('.box-sidebar-next-post ul li').each(function(index){
		if(index % 3 == 0 ){
			$(this).css('margin-left',0);
		}else{
			$(this).css('margin-left','5px');
		}
	});
	$('.comment').click(function(event){
		event.preventDefault();
		var offset = $('.box-single-comment').offset().top;
		$("html, body").animate({scrollTop: offset}, 800);
	});
	
	$(".fancybox").fancybox({
		'padding' : 0,
		beforeLoad: function() {
	     	$('#insert-link').click(function(event){
	     		event.preventDefault();
	     		if($(this).hasClass('selected')){
	     			$(this).parents('#jsid-disable-mask').addClass('insert-link');
	     			$('.selected').removeClass('selected');
	     			$(this).addClass('selected');
	     		}
	     		else{
	     			$(this).parents('#jsid-disable-mask').addClass('insert-link');
	     			$('.selected').removeClass('selected');
	     			$('.up-images').removeClass('up-images');
	     			$(this).addClass('selected');
	     		}
	     	});
	     	$('#images-up').click(function(event){
	     		event.preventDefault();
	     		if($(this).hasClass('selected')){
	     			$(this).parents('#jsid-disable-mask').addClass('up-images');
	     			$('.selected').removeClass('selected');
	     			$(this).addClass('selected');
	     		}
	     		else{
	     			$(this).parents('#jsid-disable-mask').addClass('up-images');
	     			$('.selected').removeClass('selected');
	     			$('.insert-link').removeClass('insert-link');
	     			$(this).addClass('selected');
	     		}
	     	})
	    }	
	});
	h2 = $('.box-sidebar').last().position().top - $('.main-header').height(); 
});

jQuery(window).scroll(function(){
	if($(this).scrollTop() > 200){
		$('.back-to-top').css('display','block');
	}
	else{
		$('.back-to-top').css('display','none');
	}
	var h1 = $('.header-top').height();
	if($(this).scrollTop() >= h1){
		$('.main-header').addClass('fixed');
	}
	else{
		$('.main-header').removeClass('fixed');
	}
	
	if($(this).scrollTop() > h2){
		$('.box-sidebar').last().addClass('fixed-box');
	}
	else{
		$('.box-sidebar').last().removeClass('fixed-box');
	}
});

jQuery(window).resize(function(){
	
});