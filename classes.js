Parse.initialize("bLxJPXQ34sup0hAmY8DEdELkxgWQgLgQT47dCxnf", "FsrRgGQ2irMaA0imiB8KWK8r9eiVD6pkdLpGMzk2");

// Load the Visualization API and the piechart package.
google.load('visualization', '1.0', {'packages':['corechart']});
// Set a callback to run when the Google Visualization API is loaded.
//google.setOnLoadCallback(function() {drawChart(data)});
google.setOnLoadCallback(getDataAndDrawChart);
// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.

function getDataAndDrawChart() {
  //var user = Parse.User.current();
  //var timeTableID = user.get("userSubjectTableID");
  var timeTableID = "EnkiXoKN10";
  var SampleTimeTable = Parse.Object.extend("sampleTimeTable");
  var query = new Parse.Query(SampleTimeTable);
    query.get(timeTableID, {
      success: function(object) {
          console.log(object);
          var timeTable = object;
          //drawChart();
       },
      error: function(object, error) {
      // error is an instance of Parse.Error.
          console.log(error);
      }
     });
 }

function drawChart() {
  var stringClasses = user.get("Classes");
  var stringClasses = ["6.005", "6.004", "6.036", "Russian"];
  var class1hours = timeTable.get("class1");
  var class2hours = timeTable.get("class2");
  var class3hours = timeTable.get("class3");
  var class4hours = timeTable.get("class4");
  var class1hours = 5;
  var class2hours = 5;
  var class3hours = 5;
  var class4hours = 5;
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
