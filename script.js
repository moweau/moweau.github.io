$(document).ready(function(){

    $(".navbar").hide();

    $(function () {
        $(window).scroll(function() {

            if($(this).scrollTop() > 20) {
                $('.navbar').fadeIn();
            } else {
                $('.navbar').fadeOut();
            }
        });
    });
});
