$(function(){
  $('.box1').slideDown(1000,function (){
   $('.box1').css({
    'background-color': '#0000FF',
    'height': '200px',
    'width': '200px'
   }).slideUp(1000);
  });
});