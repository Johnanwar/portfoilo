/* global  , console  */

$(function(){
   $(window).resize (function() { $(".home").height ($(window).height()); }); 
   $(".home").height($(window).height()) ;
	
	$('.text-down i').click(function() {
	$('html , body').animate({scrollTop:$($('#Home')).offset().top },1000)	});
	
	$('.home-content .btn').click(function() {
	$('html , body').animate({scrollTop:$($('#About')).offset().top },1000)	});
	
	$('.btn-contsct').click(function() {
	$('html , body').animate({scrollTop:$($('#contact')).offset().top },1000)	});
	
	 $(".navba a").click(function (e){
	 console.log("jhg")
     e.preventDefault();                     
     $("html , body").animate({ scrollTop:$("#" + $(this).data("value")).offset().top },1000)  }); 
	
	$(".navba a").click(function(){
		$(this).addClass("activee").parent().siblings().find("a").removeClass("activee");
	})
	if( $(window).width() > "1000")
		{
			$(".testat").addClass("nav")
		}
	else
		{
			$(".testat").removeClass("nav")
		}


	
	// type js plugin
new TypeIt('.front', {
  strings: ["JOHN ANWAR" ],
  speed: 300,
  breakLines: false,
  waitUntilVisible: true,
 loop: true,
}).go();
	
// end type js plugin
	
	// owlCarousel plugin
	
	$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
	animateOut: 'fadeIt',
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
		 600:{
            items:2,
            nav:true
        },
        
        
        1000:{
            items:3,
            nav:true,
            loop:true
        }
    }
})
	
	// end owlCarousel plugin
	
// alwaan section
	
	$(".alwan i").click(function(){
		$(".alwan").toggleClass("lwn");
		
		if($(".alwan").hasClass("lwn")) 
		{
			$(".alwan").css("right" , "0");
		}
		else { $(".alwan").css("right" , "-300px"); }
	})
	
	 $(".alwan li").click(function(){
	$(":root").css("--maincolor" , $(this).data("color"))  });
	
	// end alwan section
	
	// works section
	
	$(".btn-1").click(function(){
		window.open("https://johnanwar.github.io/Anagora-project/","","")
	})
	$(".btn-2").click(function(){
		window.open("https://github.com/Johnanwar/Anagora-project","","")
	})
	$(".btn-3").click(function(){
		window.open("https://johnanwar.github.io/Symptom---checker/","","")
	})
	$(".btn-4").click(function(){
		window.open("https://github.com/Johnanwar/Symptom---checker","","")
	})
	$(".btn-5").click(function(){
		window.open("https://johnanwar.github.io/tnatos-pro/","","")
	})
	$(".btn-6").click(function(){
		window.open("https://github.com/Johnanwar/tnatos-pro","","")
	})
	$(".btn-7").click(function(){
		window.open("https://johnanwar.github.io/Classic-project/","","")
	})
	$(".btn-8").click(function(){
		window.open("https://github.com/Johnanwar/Classic-project","","")
	})
	
		// works section
	
		// social section


	$(".fa-facebook-f").click(function(){
		window.open("https://www.facebook.com/jooney.jo","","")
	})
		$(".fa-github").click(function(){
		window.open("https://github.com/Johnanwar","","")
	})
		$(".fa-linkedin-in").click(function(){
		window.open("https://www.linkedin.com/in/john-anwar-099aba176/","","")
	})
	// social section
	
	// start wow .js
	
	new WOW().init();

	
	
	});