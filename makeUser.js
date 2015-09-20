
function makeUser() {
    Parse.initialize('bLxJPXQ34sup0hAmY8DEdELkxgWQgLgQT47dCxnf', 'FsrRgGQ2irMaA0imiB8KWK8r9eiVD6pkdLpGMzk2');
    var user = new Parse.User();
    user.set('username', 'slugfest');
    user.set('password', 'cocoa');
    user.signUp();

}
makeUser()
