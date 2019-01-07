// JavaScript Document

//Banner Carousel
var ns = $('#nav_slider');
ns.owlCarousel({
	autoplay:false,
	//autoplayTimeout:1000,
	//autoplaySpeed:700,
    loop:true,
    nav:true,
	dots:true,
	//animateOut: 'fadeOut',
    items: 11,
	//margin: 5,
	navText: [ '<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>' ],	
});
