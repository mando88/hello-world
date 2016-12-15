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
        $('img').fadeOut('.p');
        $('button').fadeOut('.p');
    });
    $('button').click(function() {    
        $('video').fadeOut();
        $('video').fadeIn();
    });    
    $(document).keydown(function(key) {
        switch(parseInt(key.which,10)) {
			case 65:
				$('#move').animate({left: "-=200px"}, 'fast');
				break;
			case 87:
			    $('#move').animate({top: "-=200px"}, 'fast');
				break;
			case 68:
			    $('#move').animate({left: "+=200px"}, 'fast');
				break;
			case 83:
			    $('#move').animate({top: "+=200px"}, 'fast');
				break;
		}
	});
        $('p').click(function() {
        $(this).effect('explode');
    });
});