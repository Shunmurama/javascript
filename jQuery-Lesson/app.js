// $(function() {
//   $('.box1').css({
//     'background-color': '#0000FF',
//     'height': '100px'
//   });
// });

// 上から下にアニメーション
// $(function(){
//   $('.box1').slideUp(5000);
// });

// 要素を表示
// $(function(){
//   $('.box1').show();
//   $('.box1').css({'background-color': '#0000FF'});
// });

// $(function(){
//   $('.box1').hide();
// });

// $(function(){
//     $('.box1').on('click', function(){
//         // 要素を指定できる
//         $(this).slideUp();
//     });
// });

$(function(){
  $('button').on('click', function(){
    $('ul').children().css('color','red');
  });
});