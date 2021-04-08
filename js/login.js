var password = document.getElementById("password");
var errorContainer, errorDetail;

var countTry = 0;
var passwordTry = document.getElementById("password-try");

function validateTry() {
  countTry++;
  if (countTry > 2) {
    passwordTry.style.display = 'flex';
  }
}

function login(e) {
  setLoading(true);
  e.preventDefault();
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

    var span = document.createElement('span');
    span.innerHTML = request.response;
    const newXSRFToken = span.querySelector('input[name="X-XSRF-TOKEN"]')

    if (newXSRFToken) {
      document.querySelector('input[name="X-XSRF-TOKEN"]').value = newXSRFToken.value;

      if (returnObject.warning || returnObject.error) {
        errorContainer = document.getElementById('error-container');
        errorDetail = document.getElementById(returnObject.error_code);
        if (!errorDetail) {
          errorDetail = document.getElementById('invalid_other');
          if (returnObject.error_description) {
            errorDetail = document.getElementById('error_description');
            errorDetail.innerText = returnObject.error_description;
          }
        }
        errorContainer.style.display = 'flex';
        errorDetail.style.display = 'block';
        setLoading(false);
        validateTry();
      }
    } else {
      document.location = request.responseURL;
    }

  }

  request.onerror = function (a) {
    errorContainer = document.getElementById('error-container');
    errorDetail = document.getElementById('invalid_other');
    errorContainer.style.display = 'flex';
    errorDetail.style.display = 'block';
    setLoading(false);
  }

  request.open("POST", e.target.action);
  request.send(new FormData(e.target));
}

function showPassword(e) {
  if (e.target.checked) {
    password.type = 'text';
    confirm_password.type = 'text';
    $(this).text('visibility');
  } else {
    word.type = 'password';
    confirm_password.type = 'password';
  }
}