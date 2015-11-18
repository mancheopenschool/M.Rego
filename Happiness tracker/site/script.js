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



            // prepare chart data
            var  sampleData = [
                    { Day:'Monday', Keith:30, Erica:15, George: 25},
                    { Day:'Tuesday', Keith:25, Erica:25, George: 30},
                    { Day:'Wednesday', Keith:30, Erica:20, George: 25},
                    { Day:'Thursday', Keith:35, Erica:25, George: 45},
                    { Day:'Friday', Keith:20, Erica:20, George: 25},
                    { Day:'Saturday', Keith:30, Erica:20, George: 30},
                    { Day:'Sunday', Keith:60, Erica:45, George: 90}
                ];
            
            // prepare jqxChart settings
            var settings = {
                title: "Fitness & exercise weekly scorecard",
                description: "Time spent in vigorous exercise",
                padding: { left: 5, top: 5, right: 5, bottom: 5 },
                titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
                source: sampleData,
                categoryAxis:
                    {
                        dataField: 'Day',
                        showGridLines: false
                    },
                colorScheme: 'scheme01',
                seriesGroups:
                    [
                        {
                            type: 'column',
                            columnsGapPercent: 30,
                            seriesGapPercent: 0,
                            valueAxis:
                            {
                                minValue: 0,
                                maxValue: 100,
                                unitInterval: 10,
                                description: 'Time in minutes'
                            },
                            series: [
                                    { dataField: 'Keith', displayText: 'Keith'},
                                    { dataField: 'Erica', displayText: 'Erica'},
                                    { dataField: 'George', displayText: 'George'}
                                ]
                        }
                    ]
            };
            
            // select the chartContainer DIV element and render the chart.
            $('#chartContainer').jqxChart(settings);





});




