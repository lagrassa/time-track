Parse.initialize("bLxJPXQ34sup0hAmY8DEdELkxgWQgLgQT47dCxnf", "FsrRgGQ2irMaA0imiB8KWK8r9eiVD6pkdLpGMzk2");

// Load the Visualization API and the piechart package.
google.load('visualization', '1.0', {'packages':['corechart']});
// Set a callback to run when the Google Visualization API is loaded.
//google.setOnLoadCallback(function() {drawChart(data)});
google.setOnLoadCallback(getDataAndDrawChart);
// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.

function fillTable() {
  var user = Parse.User.current();
  if (!user) {
    return;
  }
  $('tbody > tr').remove();
  var classes = user.get('classes');
  var coloring = ['success', 'danger', 'info'];
  var counter = 0;
  for (var course in classes) {
    if (classes.hasOwnProperty(course)) {
      $('tbody').append('<tr class=' + coloring[counter] + '><td>' + course + '</td><td>' + classes[1] + '</td>');
      counter = (counter + 1) % 3;
    }
  }
}

function getDataAndDrawChart() {
  //var user = Parse.User.current();
  //var timeTableID = user.get("userSubjectTableID");
  var timeTableID = "LG7RB4vLd9";
  var SampleTimeTable = Parse.Object.extend("sampleTimeTable");
  var query = new Parse.Query("sampleTimeTable");
  query.get(timeTableID, {
    success: function(timeTable) {
      var classes = timeTable.get("classes");
      console.log(classes);

      drawChart(classes);
    },
      error: function(object, error) {
      // error is an instance of Parse.Error.
          console.log(error);
      }
   });
 }

function drawChart(classes) {
  //var stringClasses = user.get("Classes");
  //var stringClasses = ["6.005", "6.004", "6.036", "Russian"];
  // Create the data table.
  var data = new google.visualization.DataTable();
  console.log("DRAW CHART");
  data.addColumn('string', 'Class');
  data.addColumn('number', 'Time spent');
  for (var course in classes) {
    if (classes.hasOwnProperty(course)) {
      data.addRows([String(course), classes.course]);
    }
  }

  // Set chart options
  var options = {'title':'Class Time Distribution',
                 'width':400,
                 'height':300};

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.PieChart(document.getElementById('piechart'));
  chart.draw(data, options);
}
