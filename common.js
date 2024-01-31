$(document).ready(function(){
    //3초마다 이미지 이동
    setInterval(function(){
        $('.images ul').animate({
            left: '-=' + 700 //3초마다 이미지 폭만큼 왼쪽으로 이동
        },'slow',function(){
            //움직임이 다 일어나고 나면 줄 명령을 작성
            $('.images li').first().appendTo('.images ul');
            $('.images ul').css('left',0);
        });
    },4000);
});