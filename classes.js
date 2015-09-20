
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
  var timeTableID = "LG7RB4vLd9";
  var SampleTimeTable = Parse.Object.extend("sampleTimeTable");
  var query = new Parse.Query("sampleTimeTable");
    query.get(timeTableID, {
      success: function(object) {
          console.log(object);
           timeTable = object;
	  var class1hours = timeTable.get("class1");
	  var class2hours = timeTable.get("class2");
	  var class3hours = timeTable.get("class3");
	  var class4hours = timeTable.get("class4");
          var classArray = timeTable.get("Classes");
          console.log(classArray);
          
          drawChart(classArray, class1hours, class2hours, class3hours, class4hours);
       },
      error: function(object, error) {
      // error is an instance of Parse.Error.
          console.log(error);
      }
     });
 }

function drawChart(stringClasses, class1hours, class2hours, class3hours, class4hours) {
  //var stringClasses = user.get("Classes");
  //var stringClasses = ["6.005", "6.004", "6.036", "Russian"];
  // Create the data table.
  var data = new google.visualization.DataTable();
  console.log("DRAW CHART");
  data.addColumn('string', 'Class');
  data.addColumn('number', 'Time spent');
  console.log(class1hours);
  console.log(class2hours);
  console.log(class3hours);
  console.log(class4hours);
  data.addRows([
    [String(stringClasses[0]), class1hours],
    [String(stringClasses[1]), class2hours],
    [String(stringClasses[2]), class3hours],
    [String(stringClasses[3]), class4hours],
  ]);

  // Set chart options
  var options = {'title':'Class Time Distribution',
                 'width':800,
                 'height':600};

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.PieChart(document.getElementById('piechart'));
  chart.draw(data, options);
}
