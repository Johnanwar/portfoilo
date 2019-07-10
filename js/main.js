/* global  , console  */

$(function(){
 
	$('.home-content .btn').click(function() {
	$('html , body').animate({scrollTop:$($('#About')).offset().top },1000)	});
	
	$('.btn-contsct').click(function() {
	$('html , body').animate({scrollTop:$($('#contact')).offset().top },1000)	});
	$('.text-down').click(function() {
		$('html , body').animate({scrollTop : 0 },1000)	});
	
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
		window.open("https://johnanwar.github.io/first-pro/","","")
	})
	$(".btn-8").click(function(){
		window.open("https://github.com/Johnanwar/first-pro","","")
	})
	$(".btn-9").click(function(){
		window.open("https://johnanwar.github.io/Classic-project/","","")
	})
	$(".btn-10").click(function(){
		window.open("https://github.com/Johnanwar/Classic-project","","")
	})
	$(".btn-12").click(function(){
		window.open("https://github.com/Johnanwar/portfoilo","","")
	})
	$(".btn-11").click(function(){
		window.open("https://johnanwar.github.io/portfoilo/","","")
	})
	$(".btn-13").click(function () {
		window.open("https://johnanwar.github.io/church-master", "", "")
	})

	$(".btn-14").click(function () {
		window.open("https://github.com/Johnanwar/church-master", "", "")
	})

	$(".btn-15").click(function () {
		window.open("https://johnanwar.github.io/clock/", "", "")
	})

	$(".btn-16").click(function () {
		window.open("https://github.com/Johnanwar/clock", "", "")
	})

	$(".btn-17").click(function () {
		window.open("https://johnanwar.github.io/game-2/", "", "")
	})

	$(".btn-18").click(function () {
		window.open("https://github.com/Johnanwar/game-2", "", "")
	})

	$(".btn-19").click(function () {
		window.open("https://johnanwar.github.io/budget/", "", "")
	})

	$(".btn-20").click(function () {
		window.open("https://github.com/Johnanwar/budget", "", "")
	})

	$(".btn-21").click(function () {
		window.open("https://johnanwar.github.io/Hallween-game/", "", "")
	})

	$(".btn-22").click(function () {
		window.open("https://github.com/Johnanwar/Hallween-game", "", "")
	})

	$(".btn-23").click(function () {
		window.open("https://johnanwar.github.io/note-book/", "", "")
	})

	$(".btn-24").click(function () {
		window.open("https://github.com/Johnanwar/note-book", "", "")
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