$(document).ready(function() {
   $('h1').mouseenter(function() {
       $(this).animate({
           height: '+=10px'
       });
   });
   $('h1').mouseleave(function() {
       $(this).animate({
           height: '-=10px'
       }); 
   });
   $('h1').click(function() {
       $(this).toggle(1000);
   });
//    $('h1').mouseleave(function() {
//       $(this).toggle(1000);
//   });
    
//    $('div').mouseenter(function() {
//        $('div').fadeTo('fast', -1.00);
//    });
//    $('div').mouseleave(function() {
//        $('div').fadeTo('fast', 1.00);
//    });
});