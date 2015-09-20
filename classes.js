Parse.initialize("bLxJPXQ34sup0hAmY8DEdELkxgWQgLgQT47dCxnf", "FsrRgGQ2irMaA0imiB8KWK8r9eiVD6pkdLpGMzk2");

// Load the Visualization API and the piechart package.
google.load('visualization', '1.0', {'packages':['corechart']});

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.

function fillTable(user) {
  $('tbody > tr').remove();
  var classes = user.get('classes');
  var coloring = ['success', 'danger', 'info'];
  var counter = 0;
  for (var course in classes) {
    if (classes.hasOwnProperty(course)) {
      var course = String(course); //cast to string, although unncessary
      console.log(course);
      var underScoreIndex = course.indexOf("_")
      if (underScoreIndex == -1) {
          $('tbody').append('<tr style="font-size: 35px;" class=' + coloring[counter] + '><td>' + course + '</td><td>' + classes[1] + '</td>');
          counter = (counter + 1) % 3;
      } else {
         console.log('saw underscore');
         var major = course.slice(0,underScoreIndex);
         var courseNumber = course.slice(underScoreIndex+1, course.length);
         var courseName = major + "." + courseNumber;
          $('tbody').append('<tr style="font-size: 35px;" class=' + coloring[counter] + '><td>' +courseName+ '</td><td>' + classes[1] + '</td>');
      }
    }
  }
}

function drawChart(user) {
  var classes = user.get('classes');
  // Create the data table.
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Class');
  data.addColumn('number', 'Time spent');
  for (var course in classes) {
<<<<<<< HEAD
         var underScoreIndex = course.indexOf('_')
         var major = course.slice(0,underScoreIndex);
         var courseNumber = course.slice(underScoreIndex+1, course.length);
         var courseName = major + "." + courseNumber;
    if (classes.hasOwnProperty(course)) {
      data.addRow([String(courseName), classes[course]]);
=======
  if (classes.hasOwnProperty(course)) {
      data.addRow([String(course), classes[course]]);
>>>>>>> 4a6a1f8ab1b456306e92d4edeb9307e23ca4125f
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
