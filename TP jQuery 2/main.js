$(document).ready(function() {
	$('.titre').click(function() {
		$('h1').css('background', 'red');
	});

	$('.onoff').click(function(){
		$('.carre').toggleClass("trouve");
	});

	$("li:contains('Alain')").addClass('red').text('je suis ici');
	
	$(".add").click(function(){
		$("ul").append("<li>Jean</li>")
	})	

	$("img").each(function(){
		//console.log("coucou");
		var imgsrc = $(this).attr('src');
		$(this).wrap("<a href='" + imgsrc + "'></a>");
	});

	$(".gallerie a").fancybox();

	$(".navigation a").click(function(){
		$(".navigation a").removeClass("active");
		$(this).addClass("active");
	});

	$( "#datepicker" ).datepicker();
});