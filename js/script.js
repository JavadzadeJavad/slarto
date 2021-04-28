$(document).ready(function() {

	$('.slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.slider-nav'
	});
	$('.slider-nav').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.slider-for',
		dots: true,
		centerMode: true,
		focusOnSelect: true
	});

	//Скролл до выбранного элемента при клике в шапке страницы

	$('.header-menu .logo').click(function(){
		$("html, body").animate({ scrollTop: $('body').offset().top}, 1000);
	});

	$(window).scroll(function(){
		var hT = $('.navbar').offset().top

		if($('#about').offset().top-100-hT>5){
			$(".header-menu li").removeClass('active');
		}
		if($('#about').offset().top-100-hT<5){
			$(".header-menu li").removeClass('active');
			$(".scrollTo-about").addClass("active");
		}
		if($('#service').offset().top-100-hT<5){
			$(".header-menu li").removeClass('active');
			$(".scrollTo-service").addClass("active");
		}
		if($('#price').offset().top-100-hT<5){
			$(".header-menu li").removeClass('active');
			$(".scrollTo-price").addClass("active");
		}
		if($('#portfolio').offset().top-100-hT<5){
			$(".header-menu li").removeClass('active');
			$(".scrollTo-portfolio").addClass("active");
		}
		if($(window).scrollTop()+$(window).height()>=$(document).height()){
    		$(".header-menu li").removeClass('active');
			$(".scrollTo-footer").addClass("active");
		}
	});
	$(".header-menu li").click(function() {
		$(".header-menu li").removeClass('active');
		$(this).addClass("active");
	});

	$('.scroll-down-mouse').click(function(){
		$(".header-menu li").removeClass('active');
		$(".scrollTo-about").addClass("active");
	});


	$('.scrollTo-about').click(function(){
		$("html, body").animate({ scrollTop: $('#about').offset().top-100}, 1000);
		$('#popup-menu-toggle').prop("checked", false);
	});
	$('.scroll-down-mouse').click(function(){
		$("html, body").animate({ scrollTop: $('#about').offset().top-100}, 1000);
		$('#popup-menu-toggle').prop("checked", false);
	});

	$('.scrollTo-service').click(function(){
		$("html, body").animate({ scrollTop: $('#service').offset().top-100}, 1000);
		$('#popup-menu-toggle').prop("checked", false);
	});

	$('.scrollTo-price').click(function(){
		$("html, body").animate({ scrollTop: $('#price').offset().top-100}, 1000);
		$('#popup-menu-toggle').prop("checked", false);
	});

	$('.scrollTo-portfolio').click(function(){
		$("html, body").animate({ scrollTop: $('#portfolio').offset().top-100}, 1000);
		$('#popup-menu-toggle').prop("checked", false);
	});

	$('.scrollTo-footer').click(function(){
		$("html, body").animate({ scrollTop: $('#footer').offset().top-100}, 1000);
		$('#popup-menu-toggle').prop("checked", false);
	});



	//При ширине экрана <500px, при клике в списке школ на элемент, показать соответствующюю школу
	$('.schools-list .develp-intreface').click(function(){
		showColDevelpInterface();
		$('#schools-list-toggle').prop("checked", false);
	});

	$('.schools-list .mob-develp').click(function(){
		showColMobDevelp();
		$('#schools-list-toggle').prop("checked", false);
	});

	$('.schools-list .mob-design').click(function(){
		showColMobDesign();
		$('#schools-list-toggle').prop("checked", false);
	});

	//___________media запросы___________
	$(window).resize(function(){
		var windowwidth = $(window).width();
	});
});

