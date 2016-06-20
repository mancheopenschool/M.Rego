$("#tabs").ready(function() {
    lineChart();

    $(window).resize(function() {
        window.m.redraw();
    });
});




function lineChart() {

    window.m = Morris.Line({

   element: 'myfirstchart',
   data: [
    { y: 'Lundi', a: 5, b: 2, c: 3 },
    { y: 'Mardi', a: 4,  b: 3, c: 4 },
    { y: 'Mercredi', a: 2,  b: 4, c: 5 },
    { y: 'Jeudi', a: 3,  b: 5, c: 4 },
    { y: 'Vendredi', a: 5,  b: 2, c: 3, },
    { y: 'Samedi', a: 3,  b: 4, c: 5 },
    { y: 'Dimanche', a: 4, b: 1, c: 3 }
  ],

  ymax: '5',
  ymin: '1',
  xkey: 'y',
  ykeys: ['a', 'b', 'c'],
  labels: ['Happiness in code', 'Growth in code', 'Happiness in life'],
  parseTime: false,
  lineColors: ['#337AB7','#D9534F','#002D56' ],
  xLabelAngle: 60,
  resize: 'true',
  redraw: 'true',
});
}