/* global  , console  */

$(function(){
 
	$('.home-content .btn').click(function() {
	$('html , body').animate({scrollTop:$($('#About')).offset().top },1000)	});
	
	$('.btn-contsct').click(function() {
	$('html , body').animate({scrollTop:$($('#contact')).offset().top },1000)	});
	
	 $(".navba a").click(function (e){
     e.preventDefault();                     
     $("html , body").animate({ scrollTop:$("#" + $(this).data("value")).offset().top },1000)  }); 
	
	$(".navba a").click(function(){
		$(this).addClass("activee").parent().parent().siblings().find("a").removeClass("activee");
	})


	

// stat type js function
var i = 0
var myText = "JOHN ANWAR"
var span = document.getElementById("front")


var myFunction = setInterval (function(){
 span.textContent += myText[i] ;
 i++

 if (i> myText.length-1)
 {
	 clearTimeout(myFunction)
 }

},400);

// end type js function





	// about progress 
	  

	$(".progress-bar").each( function (){
		$(this).animate({
			width:$(this).data("value")
		},5000) })
	
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
	$(".btn-9").click(function(){
		window.open("https://johnanwar.github.io/Classic-project/","","")
	})
	$(".btn-10").click(function(){
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
	

	
	
	});