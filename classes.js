Parse.initialize("bLxJPXQ34sup0hAmY8DEdELkxgWQgLgQT47dCxnf", "FsrRgGQ2irMaA0imiB8KWK8r9eiVD6pkdLpGMzk2");

var user = Parse.User.current();
if (user) {
  for (var i = 0; i < user.get('Classes'); i++) {
  }
}



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

  // Create the data table.
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Class');
  data.addColumn('number', 'Time spent');

  data.addRows([
    ['6.034', 8],
    ['Russian', 10],
    ['6.004', 13],
    ['6.005', 20],
  ]);

  // Set chart options
  var options = {'title':'Class Time Distribution',
                 'width':400,
                 'height':300};

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.PieChart(document.getElementById('piechart'));
  chart.draw(data, options);
}
