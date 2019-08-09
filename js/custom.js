$(document).on('ready', function() {


	jQuery('.slick_slider').slick();

	// Header Active class function start here
	var href = document.location.href;
	var lastPathSegment = href.substr(href.lastIndexOf('/') + 1);
	//alert(lastPathSegment)
	if(lastPathSegment == 'index.html'){
		$('#home_menue').addClass('active');
	}else{
		$('#home_menue').removeClass('active');
	}
	$('ul li a').click(function(){
    	$('li a').removeClass("active");
    	$(this).addClass("active");
	});
	// Header Active class function End here
	
 
}); 