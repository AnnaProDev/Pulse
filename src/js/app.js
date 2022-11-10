import * as flsFunctions from "./modules/functions.js";
import * as slick from "./slick.min.js";
flsFunctions.isWebp();

$(document).ready(function(){
	$('.carousel__inner').slick({
		dots: false,
		speed: 1200,
		//adaptiveHeight: true,
		prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/arrow-left.png"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="img/icons/arrow-right.png"></button>',
		responsive: [
			{
				breakpoint: 992,
				settings: {
					arrows: false,
					dots: true
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		},
		]
	});
})