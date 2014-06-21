//

$(function ($) {
	$(".js-about").click(function(e){
		e.preventDefault();
		console.log("working")
		$(".overlay").removeClass('hidden');
		
	});

	$(".close").click(function(e){
		e.preventDefault();
		$(".overlay").addClass('hidden');
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