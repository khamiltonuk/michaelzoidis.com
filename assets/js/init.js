//console.log("working")


$(function ($) {
    $(".spin-plus").click(function () {
        $(this).toggleClass('animate');
        $("#menu").toggleClass('shown-sub');
    })
});
