$(document).ready(function(){
  $(window).scroll(function(){
    if($(this).scrollTop() > 50){
      $('#up').stop().animate({
        top : '530px'
        },500);
    }
    else{
      $('#up').stop().animate({
        top: '-100px'
      },500);
    }
  });
  $('#up').click(function(){
    $('html, body').stop().animate({
      scrollTop : 0
    },500,function(){
      $('#up').stop().animate({
        top:'-100px'
      },500);
    });
  });
});