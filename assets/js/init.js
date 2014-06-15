//console.log("working")


$(function ($) {
    $(".spin-plus").click(function () {
        $(this).toggleClass('animate');
        $("header").toggleClass('shown-sub');
    })

    enquire.register("screen and (min-width: 767px)", {
	    match : function() {
	    	$("header").addClass('shown-sub');
	    },
	    unmatch : function() {
	    	$("header").removeClass('shown-sub');
	    },
	});


});
