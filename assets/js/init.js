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
	    	$(".spin-plus").removeClass('animate');
	    	$("header").removeClass('shown-sub');
	    },
	});
});

var person1 = {
    name: "nicolas",
    age: 0
}
// for (property in person1 ) {
// 	console.log("name: " + property);
// 	console.log("value: " + person1[property]);
// }

var properties = Object.keys(person1);
var i, len;

for (i=0, len=properties.length; i < len; i++){
	console.log('property: ' + properties[i])
	console.log('value' + person1[properties[i]])
}