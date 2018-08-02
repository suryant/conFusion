$("#carouselButton").click(function () {
    if ($("#carouselButton").children("span").hasClass('fa-pause')) {
        $("#mycarousel").carousel('pause');
        $("#carouselButton").children("span").removeClass('fa-pause');
        $("#carouselButton").children("span").addClass('fa-play');
    }
    else if ($("#carouselButton").children("span").hasClass('fa-play')) {
        $("#mycarousel").carousel('cycle');
        $("#carouselButton").children("span").removeClass('fa-play');
        $("#carouselButton").children("span").addClass('fa-pause');
    }
});
$("#loginButton").click(function () {
    $('#loginModal').modal('show');
});
$("#loginCancel").click(function () {
    $('#loginModal').modal('hide');
});
$("#loginCross").click(function () {
    $('#loginModal').modal('hide');
});
$("#reserveButton").click(function () {
    $('#reserveform').modal('show');
});
$("#reserveCancel").click(function () {
    $('#reserveform').modal('hide');
});
$("#reserveCross").click(function () {
    $('#reserveform').modal('hide');
});