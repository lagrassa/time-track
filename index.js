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
    $('#login').hide();
    $('#signup').hide();
    $('#fblogin').hide();
  } else {
    $('#logout').hide();
  }
});

function signup() {
  var user = new Parse.User();
  var username = document.getElementById('email').value;
  var password = document.getElementById('pwd').value;
  console.log(username);
  console.log(password);
  user.set("username", username);
  user.set("password", password);
  user.set("email", username);

  user.signUp(null, {
    success: function(user) {
      // Hooray! Let them use the app now.
      console.log("signed up!");
      $('#login').hide();
      $('$signup').hide();
    },
    error: function(user, error) {
      console.log(error);
      // Show the error message somewhere and let the user try again.
      alert("Error: " + error.code + " " + error.message);
    }
  });
}

function showModal() {
  $('#userModal').modal('show');
}

function login() {
  var username = document.getElementById('email').value;
  var password = document.getElementById('pwd').value;
  console.log(username);
  console.log(password);
  Parse.User.logIn('asdf@gmail.com', 'asdf', {
    success: function(user) {
      $('#llogin').hide();
      $('#ssignup').hide();
      $('#logout').show();
      $('#userModal').modal('hide');
    },
    error: function(user, error) {
      console.log(error);
      // alert("Error: " + error.code + " " + error.message);
    }
  });
}

function logout() {
  console.log('here');
  Parse.User.logOut();
}
