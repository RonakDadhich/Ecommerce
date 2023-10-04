// search icon js
$(document).ready(function () {
    //add active class
    $(".search_icon").click(function () {
        $(".search_screen").addClass("active");
    });

    //remove active class
    $(".close_icon").click(function () {
        $(".search_screen").removeClass("active");
    });

});