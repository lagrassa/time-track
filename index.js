Parse.initialize("bLxJPXQ34sup0hAmY8DEdELkxgWQgLgQT47dCxnf", "FsrRgGQ2irMaA0imiB8KWK8r9eiVD6pkdLpGMzk2");

$(document).ready(function() {
  $('#userModal').on('show.bs.modal', function(event) {
    var button = $(event.relatedTarget);
    var type = button.data('type');
    var modal = $(this);
    modal.find('.modal-title').text(type);
    if (type === 'Sign up!') {
      modal.find('button').on('click', function(e) {
        e.preventDefault();
        signup();
      });
    }
    else {
      modal.find('button').on('click', function(e) {
        e.preventDefault();
        login();
      });
    }
  });

  if (Parse.User.current()) {
    Parse.User.current().fetch({
      success: function(user) {
        fillTable(user);
        drawChart(user);
      }
    });
    $('#login').hide();
    $('#signup').hide();
  } else {
    $('#logout').hide();
  }
});

function signup() {
  var user = new Parse.User();
  var username = document.getElementById('email').value;
  var password = document.getElementById('pwd').value;
  user.set("username", username);
  user.set("password", password);
  user.set("email", username);

  user.signUp(null, {
    success: function(user) {
      // Hooray! Let them use the app now.
      $('#login').hide();
      $('#signup').hide();
      $('#userModal').modal('hide');
      window.location.replace('time.html');
    },
    error: function(error) {
      // Show the error message somewhere and let the user try again.
      console.log("Error: " + error.code + " " + error.message);
    }
  });
}

function login() {
  var username = document.getElementById('email').value;
  var password = document.getElementById('pwd').value;
  Parse.User.logIn(username, password, {
    success: function(user) {
      $('#llogin').hide();
      $('#ssignup').hide();
      $('#logout').show();
      $('#userModal').modal('hide');
      window.location.replace('time.html');
      fillTable(user);
      drawChart(user);
    },
    error: function(error) {
      console.log("Error: " + error.code + " " + error.message);
    }
  });
}

function logout() {
  Parse.User.logOut();
  $('#llogin').show();
  $('#ssignup').show();
  $('#logout').hide();
  window.location.replace('home.html');
}
