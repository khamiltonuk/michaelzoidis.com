$(function ($) {
	if(document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1")){
		(function(H){H.className=H.className.replace(/\bno-svg\b/,'svg')})(document.documentElement);
	}

	var windowHeight = $(window).height();
	var baseSpace = windowHeight / 10;
	disfromtop = $(window).scrollTop();
	var spaceOutLinks = function(){
		$('.right-floating-nav object').each(function(){
			if (disfromtop < 1000){
				$(this).css({
				 marginBottom: (baseSpace + (disfromtop/20)) + 'px'
				});
			}
		});
	}
	spaceOutLinks();

	$(window).scroll(function() {
		disfromtop = $(this).scrollTop();
		disfromtop > 250 ? $('#go-top').addClass('animate') : $('#go-top').removeClass('animate') ;

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
		$(".overlay").removeClass('hidden').attr("aria-hidden", "false");;
		
	});

	$(".close").click(function(e){
		e.preventDefault();
		$(".overlay").addClass('hidden').attr("aria-hidden", "true");;
	})

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