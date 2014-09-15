$(function ($) {
	if(document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1")){
		(function(H){H.className=H.className.replace(/\bno-svg\b/,'svg')})(document.documentElement);
	}

	// Picture element HTML5 shiv
	document.createElement( "picture" );
	console.log("%c+","font-size: 1px; padding: 100px 200px; line-height: 360px; background: url(https://38.media.tumblr.com/91a6ad612b38026bff6d7df50af3dac9/tumblr_nbwphdEPUe1tpblejo2_250.gif); background-size: 245px 234px; color: transparent;");

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
		disfromtop > 250 ? $('#go-top').addClass('is-shown') : $('#go-top').removeClass('is-shown') ;
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
	    	$("header, footer").addClass('shown-sub');
	    	$(".about-text").addClass('center');
	    },
	    unmatch : function() {
	    	$(".spin-plus").removeClass('animate');
	    	$("header, footer").removeClass('shown-sub');
	    	$(".about-text").removeClass('center');
	    },
	});
});