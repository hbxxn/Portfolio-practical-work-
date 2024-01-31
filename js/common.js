//popup
$(document).ready(function(){
    $('.popupopen').click(function(){
        $('.popup').stop().fadeIn(0);
    });

    $('button').click(function(){
        $('.popup').stop().fadeOut(0);
    });
});

//gnb
$(document).ready(function(){

    $('.gnb').hover(function(){

        $('.gnbbg, .subnav').stop().slideDown('fast');
    },function(){

        $('.gnbbg, .subnav').stop().slideUp('fast');
    });
});

//main
$(document).ready(function(){

    setInterval(function(){
        $('.main ul').animate({
            left: '-=' + 1200
        },'slow',function(){
            $('.main li').first().appendTo('.main ul');
            $('.main ul').css('left',0);
        });
    },3000);
});

