$(".mdl-textfield__input").focus(function () {
  if (!this.value) {
    $(this).prop('required', true);
    $(this).parent().addClass('is-invalid');
  }
});
$(".mdl-button[type='submit']").click(function (event) {
  $(this).siblings(".mdl-textfield").addClass('is-invalid');
  $(this).siblings(".mdl-textfield").children(".mdl-textfield__input").prop('required', true);
});
$("#changePasswordVisibility").click(function () {
  var inputType = $('input#password').attr('type');
  if (inputType === 'text') {
    $('input#password').prop('type', 'password');
    $('input#confirmation').prop('type', 'password');
    $(this).text('visibility');
  } else {
    $('input#password').prop('type', 'text');
    $('input#confirmation').prop('type', 'text');
    $(this).text('visibility_off');
  }
});

var password = document.getElementById("password")
  , confirm_password = document.getElementById("confirmation");

function validatePassword() {
  if (password.value != confirm_password.value) {
    confirm_password.setCustomValidity("As senhas não são iguais. Tente novamente.");
  } else {
    confirm_password.setCustomValidity('');
  }
}

var errorContainer, errorDetail

function register(e) {
  var progress = document.getElementById('progress');
  progress.style.visibility = 'visible';
  e.preventDefault();
  document.getElementById('username').value = document.getElementById('email').value;
  if (errorContainer) {
    errorContainer.style.display = 'none';
  }

  if (errorDetail) {
    errorDetail.style.display = 'none';
  }

  var request = new XMLHttpRequest();
  request.onload = function () {
    const urlParams = new URLSearchParams(request.responseURL.split('?')[1]);
    var returnObject = Object.fromEntries(urlParams.entries());
    // console.log(returnObject);

    var span = document.createElement('span');
    span.innerHTML = request.response;
    const newXSRFToken = span.querySelector('input[name="X-XSRF-TOKEN"]')

    if (newXSRFToken) {
      document.querySelector('input[name="X-XSRF-TOKEN"]').value = newXSRFToken.value;

      if (returnObject.warning || returnObject.error) {
        errorContainer = document.getElementById('error-container');
        errorDetail = document.getElementById(returnObject.warning);
        if (!errorDetail) {
          errorDetail = document.getElementById('invalid_other');
        }
        if (returnObject.error_description) {
          errorDetail = document.getElementById('error_description');
          errorDetail.innerText = returnObject.error_description;
        }
        errorContainer.style.display = 'block';
        errorDetail.style.display = 'block';
        progress.style.visibility = 'hidden';
      }
    } else {
      document.location = request.responseURL;
    }

  }
  request.open("POST", e.target.action);
  request.send(new FormData(e.target));
}