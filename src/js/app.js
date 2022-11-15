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
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
				}
			},
			{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
			}
		},
		]
	});

	$('ul.catalog__tabs').on('click', 'li:not(catalog__tab_active)', function() {
		$(this)
			.addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
			.closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
	});

	function toggleSlide (item) {
		$(item).each(function(i){
			$(this).on('click', function(e) {
				e.preventDefault();
				$(".catalog-item__content").eq(i).toggleClass("catalog-item__content_active");
				$(".catalog-item__list").eq(i).toggleClass("catalog-item__list_active");
			})
		});
	};

	toggleSlide(".catalog-item__link");
	toggleSlide(".catalog-item__back");

	//Modal

	$("[data-modal=consultation]").on("click", function(){
		$(".overlay, #consultant").fadeIn("slow");
	});
	$(".modal__close").on("click", function(){
		$(".overlay, #consultant, #thanks, #order").fadeOut("slow");
	});

	$(".button_mini").each(function(i) {
		$(this).on("click", function() {
			$("#order .modal__descr").text($(".catalog-item__subtitle").eq(i).text());
			$(".overlay, #order").fadeIn("slow");
		})
	});
	
	 //Validate 

	function validateForms(form){
		$(form).validate({
			rules: {
					name: {
						required: true,
						minlength: 2
					},
					phone: "required",
					email: {
						required: true,
						email: true
					}
			},
			messages: {
					name: {
						required: "Please specify your name",
						minlength: jQuery.validator.format("Enter {0} symbols!")
					},
					phone: "Please specify your phone number",
					email: {
					required: "We need your email address to contact you",
					email: "Your email address must be in the format of name@domain.com"
					}
			}
		});
	};

	validateForms('#consultation-form');
	validateForms('#consultant form');
	validateForms('#order form');

	$('input[name=phone]').mask('(999) 999-9999')

	//Smooth scroll and pageup
	$(window).scroll(function(){
		if ($(this).scrollTop() > 1600) {
			$(".pageup").fadeIn();
		} else {
			$(".pageup").fadeOut();
		}
	});

	$("a").on('click', function(event) {
		if (this.hash !== "") {
			event.preventDefault();
			var hash = this.hash;
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 800, function(){
			window.location.hash = hash;
			});
		} 
	});

	AOS.init();
});