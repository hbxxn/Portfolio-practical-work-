//popup
$(document).ready(function(){
    $('.popupopen').click(function(){
        $('.popup').fadeIn(0);
    });
    
    $('button').click(function(){
        $('.popup').fadeOut(0);
    });
});

//gnb
$(document).ready(function(){
    $('.mainnav').hover(function(){
        $(this).find('+ .subnav').stop().slideDown('fast');
        
        $(this).parent().mouseleave(function(){
            $(this).find('.subnav').stop().slideUp('fast');
        });
    });
});


//main
$(document).ready(function(){
    var num = 0;
    
    setInterval(function(){
        
        if(num<2){
            num++;
        }else{
            num = 0;
        }
        $('.main li').fadeOut('slow');
        $('.main li').eq(num).fadeIn('slow');
    },2500);
});

