$(document).ready(function(){
	$('.nav-content li a').on('click',function(event){
		event.preventDefault();
		var target = $(this).attr("href");
		$('.page').not(target).fadeOut(200);
		setTimeout(function(){
				$(target).fadeIn();
			},200);
	});


});