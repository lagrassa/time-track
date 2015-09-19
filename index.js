$(document).ready(function() {
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
  } else {
    $('#logout').hide();
  }
});
