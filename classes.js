

// Load the Visualization API and the piechart package.
google.load('visualization', '1.0', {'packages':['corechart']});
var data = 5;
// Set a callback to run when the Google Visualization API is loaded.
//google.setOnLoadCallback(function() {drawChart(data)});
google.setOnLoadCallback(drawChart);
// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart() {
  var stringClasses = ["6.005", "6.004", "6.036", "Russian"];
  var class1hours = 5;
  var class2hours = 5;
  var class3hours = 5;
  var class4hours = 5;
  // Create the data table.
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Class');
  data.addColumn('number', 'Time spent');
  data.addRows([
    [stringClasses[0], class1hours],
    [stringClasses[1], class2hours],
    [stringClasses[2], class3hours],
    [stringClasses[3], class4hours],
  ]);

  // Set chart options
  var options = {'title':'Class Time Distribution',
                 'width':800,
                 'height':600};

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.PieChart(document.getElementById('piechart'));
  chart.draw(data, options);
}
