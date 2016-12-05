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
    $('button').click(function() {    
        $('img').fadeIn('.p');
        $('button').fadeOut('.p');
    });
    
    $(document).keydown(function(key) {
        switch(parseInt(key.which,10)) {
			case 37:
				$('#move').animate({left: "-=10px"}, 'fast');
				break;
			case 38:
			    $('#move').animate({top: "-=10px"}, 'fast');
				break;
			case 39:
			    $('#move').animate({left: "+=10px"}, 'fast');
				break;
			case 40:
			    $('#move').animate({top: "+=10px"}, 'fast');
				break;
		}
	});
});