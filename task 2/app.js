$(document).ready(function () {



    $('.js--wp1').waypoint(function (direction) {
        $('.js--wp1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });


    $('.js--wp2').waypoint(function (direction) {
        $('.js--wp2').addClass('animated pulse');
    }, {
        offset: '50%'
    });

    $('.js--wp3').waypoint(function (direction) {
        $('.js--wp3').addClass('animated flash');
    }, {
        offset: '50%'
    });

})