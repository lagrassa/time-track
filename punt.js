var data = 5;
drawChartGivenData(5);


function drawChartGivenData(data) {

      // Load the Visualization API and the piechart package.
      google.load('visualization', '1.0', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.setOnLoadCallback(getDataAndDrawChart);
      var timeTableID = "LG7RB4vLd9";
      var SampleTimeTable = Parse.Object.extend("sampleTimeTable");
      var query = new Parse.Query("sampleTimeTable");
      query.get(timeTableID, {
          success: function(object) {
               timeTable = object;
               var puntTime = timeTable.get("punting");
               var toolTime = timeTable.get("tooling");
               drawChart(puntTime, toolTime);
       },
      error: function(object, error) {
      // error is an instance of Parse.Error.
          console.log(error);
      }
     });
      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.

      function drawChart(hoursPunted, hoursTooled) {
         console.log("DRAWCHART")
         console.log(hoursPunted);
         console.log(hoursTooled); 
        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Activity');
        data.addColumn('number', 'Time spent');
        data.addRows([
          ['Punting', hoursPunted],
          ['Tooling', hoursTooled],
        ]);

        // Set chart options
        var options = {'title':'Punt/Tool Distribution',
                       'width':800,
                       'height':600};

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('puntchart'));
        chart.draw(data, options);
      }
}
