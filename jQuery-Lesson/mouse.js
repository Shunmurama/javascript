// $(function(){
//   // マウスを合わせた時
//   $('.box1').mouseover(function(){
//     $('.box1').css({ 'background-color': '#0000FF'});
//   });
//   // マウスを外した時
//   $('.box1').mouseout(function(){
//     $('.box1').css({'background-color': '#FF0000'});
//   });
// });

$(function(){
  // クリックした時
  $('.box1').on('click',function(){
    $('.box1').addClass('box1-ext');
  });
  // マウスを外した時
  // $('.box1').mouseout(function(){
  //   $('.box1').removeClass('box1-ext');
  // });
});

