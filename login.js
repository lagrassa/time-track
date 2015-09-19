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
  // user.signUp().then(function(user) {
  //   console.log("signed up!");
  // }, function(error) {
  //   // Show the error message somewhere and let the user try again.
  //   alert("Error: " + error.code + " " + error.message);
  // });
}

function login() {
  var username = $('#usernameField').value;
  var password = $('#passwordField').value;
  alert(username);
  alert(password);

  Parse.User.logIn(username, password).then(function(user) {

  }, function(error) {
    alert(error);
  });
}

function logout() {
  Parse.User.logOut();
}
