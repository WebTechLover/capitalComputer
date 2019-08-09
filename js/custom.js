$(document).on('ready', function() {
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
	// Slider start here
	$(".lazy").slick({
    	lazyLoad: 'ondemand', // ondemand progressive anticipated
    	infinite: true,
    	autoplay: true, /* this is the new line */
      autoplaySpeed: 2000,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      touchThreshold: 1000
  	});
  	// Slider End here
});