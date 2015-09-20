var data = 5;
drawChartGivenData(5);


function drawChartGivenData(data) {

      // Load the Visualization API and the piechart package.
      google.load('visualization', '1.0', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.setOnLoadCallback(drawChart);
      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.

      function drawChart(hoursPunted, hoursTooled) {
         u = Parse.User.current();
         var hoursPunted = u.get("punting"); 
         var hoursTooled = u.get("tooling");
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

