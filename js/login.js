function login(e) {
  //	      e.preventDefault();
  //          var request = new XMLHttpRequest();
  //          request.open("POST", ${action});
  //          request.send(new FormData(e.target));
}

var password = document.getElementById("password");

function showPassword(e) {
  if (e.target.checked) {
    password.type = 'text';
    confirm_password.type = 'text';
    $(this).text('visibility');
  } else {
    password.type = 'password';
    confirm_password.type = 'password';
  }
}