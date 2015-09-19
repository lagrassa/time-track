$(document).ready(function() {
  Parse.initialize('bLxJPXQ34sup0hAmY8DEdELkxgWQgLgQT47dCxnf', 'FsrRgGQ2irMaA0imiB8KWK8r9eiVD6pkdLpGMzk2');
  $('#userModal').on('show.bs.modal', function(event) {
    var button = $(event.relatedTarget);
    var type = button.data('type');
    var modal = $(this);
    modal.find('.modal-title').text(type);
    if (type === 'Sign up!') {
      modal.find('button').on('click', function() { signup(); });
    }
    else {
      modal.find('button').on('click', function() { alert('login'); login(); });
    }
    console.log(modal.find('button'));
  });

  if (Parse.User.current()) {
    $('#login').hide();
    $('#signup').hide();
    $('#fblogin').hide()
  } else {
    $('#logout').hide();
  }
});
