
$(document).ready(function(){ 
	$('#myModal').on('shown.bs.modal', function () {
	  	$('#myInput').focus()
	})

  	$(function() {
    	$( "#tabs" ).tabs();
  	});

	$(function() {
	  	$( "#datepicker" ).datepicker();
	});

	$(function() {
	  	$( "#slider-vertical" ).slider({
		    orientation: "vertical",
		    range: "min",
		    min: 0,
		    max: 5,
		    value: 0,
		    slide: function( event, ui ) {
	      		$( "#amount" ).val( ui.value );
	    	}
	  	});
	  	$( "#amount" ).val( $( "#slider-vertical" ).slider( "value" ) );
	});

	$(function() {
	  	$( "#slider-vertical2" ).slider({
		    orientation: "vertical",
		    range: "min",
		    min: 0,
		    max: 5,
		    value: 0,
		    slide: function( event, ui ) {
	      		$( "#amount2" ).val( ui.value );
	    	}
	  	});
	  	$( "#amount2" ).val( $( "#slider-vertical2" ).slider( "value" ) );
	});


});