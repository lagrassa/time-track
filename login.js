function signup() {
  var user = new Parse.User();
  var username = $('#usernameField').value;
  var password = $('#passwordField').value;
  console.log('hi');
  alert(username);
  alert(password);
  user.set("username", username);
  user.set("password", password);
  user.set("email", email);

  user.signUp().then(function(user) {
    console.log("signed up!");
  }, function(error) {
    // Show the error message somewhere and let the user try again.
    alert("Error: " + error.code + " " + error.message);
  });
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
