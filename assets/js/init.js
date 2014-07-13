$(function ($) {
	if(document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1")){
		(function(H){H.className=H.className.replace(/\bno-svg\b/,'svg')})(document.documentElement);
	}

	var windowHeight = $(window).height();
	var baseSpace = windowHeight / 10;
	disfromtop = $(window).scrollTop();
	var spaceOutLinks = function(){
		$('.right-floating-nav img').each(function(){
			if (disfromtop < windowHeight ){
				$(this).css({
				 marginBottom: (baseSpace + (disfromtop/20)) + 'px'
				});
			}
		});
		/*$('.registation-marks > span').each(function(){
			if (disfromtop < windowHeight ){
				$(this).css({
				 marginBottom: (disfromtop/50) + 'px',
				 '-webkit-transform': 'rotate(' + (disfromtop/10) + 'deg)',
				 '-moz-transform': 'rotate(' + (disfromtop/10) + 'deg)',
				 transform: 'rotate(' + (disfromtop/10) + 'deg)'
				});
			}
		});*/
	}
	var stickyElement = function(){
		$('.absolute').each(function(){
			var elmOffset = $(this).offset();
			//var startingHeight = elmOffset.top;
				$(this).css({
					top: (disfromtop + 60) + 'px'
				});
		});
	}
	spaceOutLinks();

	$(window).scroll(function() {
		disfromtop = $(this).scrollTop();
		disfromtop > 250 ? $('#go-top').addClass('animate') : $('#go-top').removeClass('animate') ;
		stickyElement();
		// space out links
		spaceOutLinks();


		
	});


	$('#go-top').click(function(e){
		e.preventDefault();
		$('html, body').stop().animate({
			scrollTop: 0
		});
	});
	

	$(".js-about").click(function(e){
		e.preventDefault();
		console.log("working")
		$(".overlay").removeClass('hidden').attr("aria-hidden", "false");
		$(".overlay").find(".about-text").removeClass("hidden");
	});

	var closeOverlay = function(){
		$(".overlay").addClass('hidden').attr("aria-hidden", "true");
	}

	$(".close").click(function(e){
		e.preventDefault();
		closeOverlay();
	})

	$(document).keyup(function(e) {
		if (e.keyCode == 27) {
			closeOverlay();
		}// esc
	});

    $(".spin-plus").click(function () {
        $(this).toggleClass('animate');
        $("header").toggleClass('shown-sub');
    })

    enquire.register("screen and (min-width: 767px)", {
	    match : function() {
	    	$("header").addClass('shown-sub');
	    	$(".about-text").addClass('center');
	    },
	    unmatch : function() {
	    	$(".spin-plus").removeClass('animate');
	    	$("header").removeClass('shown-sub');
	    	$(".about-text").removeClass('center');
	    },
	});
});