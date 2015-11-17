$(document).ready(function(){

	$( "#tabs" ).tabs();
    $.datepicker.setDefaults( $.datepicker.regional[ "fr" ] );
	$( "#datepicker" ).datepicker({
	  altField: "#alternate",
      altFormat: "DD d MM yy"
	});

        $( "#slider1" ).slider({
      range: "min",
      min: 0,
      max: 5,
      value: 0,
      slide: function( event, ui ) {
        $( "#amount1" ).val( ui.value );
      }
    });
    $( "#amount1" ).val( $( "#slider1" ).slider( "value" ) );

        $( "#slider2" ).slider({
      range: "min",
      min: 0,
      max: 5,
      value: 0,
      slide: function( event, ui ) {
        $( "#amount2" ).val( ui.value );
      }
    });
    $( "#amount2" ).val( $( "#slider2" ).slider( "value" ) );

        $( "#slider3" ).slider({
      range: "min",
      min: 0,
      max: 5,
      value: 0,
      slide: function( event, ui ) {
        $( "#amount3" ).val( ui.value );
      }
    });
    $( "#amount3" ).val( $( "#slider3" ).slider( "value" ) );

});

