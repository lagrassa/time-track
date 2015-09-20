Parse.initialize("bLxJPXQ34sup0hAmY8DEdELkxgWQgLgQT47dCxnf", "FsrRgGQ2irMaA0imiB8KWK8r9eiVD6pkdLpGMzk2");

// Load the Visualization API and the piechart package.
google.load('visualization', '1.0', {'packages':['corechart']});

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
  console.log(classes);
  var coloring = ['success', 'danger', 'info'];
  var counter = 0;
  for (var course in classes) {
    if (classes.hasOwnProperty(course)) {
      $('tbody').append('<tr style="font-size: 35px;" class=' + coloring[counter] + '><td>' + course + '</td><td>' + classes[course] + '</td>');
      counter = (counter + 1) % 3;
    }
  }
}

function drawChart() {
  var user = Parse.User.current();
  var classes = user.get('classes');
  // Create the data table.
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Class');
  data.addColumn('number', 'Time spent');
  for (var course in classes) {
    if (classes.hasOwnProperty(course)) {
      data.addRow([String(course), classes[course]]);
    }
  }

  // Set chart options
  var options = {'title':'Class Time Distribution',
                 'width':800,
                 'height':600};

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.PieChart(document.getElementById('piechart'));
  chart.draw(data, options);
}
