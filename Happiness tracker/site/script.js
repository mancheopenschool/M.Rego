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


  var r = Raphael("simpleExample");
     var xAxisValues = [];
  for( var i = 0; i < 8; i++ ) {
    var date = new Date();
    date.setDate(date.getDate() + i);
    xAxisValues.push(date.getTime());
  }
  var yAxisValues = [1, 2, 3, 4, 5];
 
  var chart = r.g.linechart(
    10, 10,      // top left anchor
    490, 180,    // bottom right anchor
    xAxisValues,
    yAxisValues,
    {
       nostroke: false,   // lines between points are drawn
       axis: "0 0 1 1",   // draw axes on the left and bottom
       symbol: "disc",            // the data set is filled circles
       smooth: true,      // curve the lines to smooth turns on the chart
       colors: ["#995555" ]     // the line is red
     });
 
    // change the x-axis labels
    var axisItems = chart.axis[0].text.items
    for( var i = 0, l = axisItems.length; i < l; i++ ) {
       var date = new Date(parseInt(axisItems[i].attr("text")));
       // using the excellent dateFormat code from Steve Levithan
       // See: http://blog.stevenlevithan.com/archives/date-time-format
       axisItems[i].attr("text", dateFormat(date, "dd"));
    }
});

