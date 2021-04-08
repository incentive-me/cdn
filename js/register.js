var password = document.getElementById("password")
  , confirm_password = document.getElementById("confirmation");

var errorContainer, errorDetail;

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

function validateEmail() {
  setLoading(true);
  const email = document.getElementById('email');
  const emailInfo = document.getElementById('email-info');
  const emailError = document.getElementById('email-error');

  let xhr = new XMLHttpRequest();

  xhr.open('GET', `https://api.incentive.me/accounts/v1/exists/${email.value}`);
  xhr.send();

  xhr.onload = function () {
    setLoading(false);
    if (xhr.status !== 200 || xhr.response == 'true') {
      emailInfo.style.display = 'none';
      emailError.style.display = 'flex';
      email.setCustomValidity("Informe um e-mail válido");
    } else {
      emailInfo.style.display = 'flex';
      emailError.style.display = 'none';
      email.setCustomValidity("");
    }
  };
}

function validatePassword() {
  if (password.value != confirm_password.value) {
    confirm_password.setCustomValidity("As senhas não são iguais. Tente novamente.");
  } else {
    confirm_password.setCustomValidity('');
  }
}

function register(e) {
  setLoading(true);
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
          if (returnObject.error_description) {
            errorDetail = document.getElementById('error_description');
            errorDetail.innerText = returnObject.error_description;
          }
        }
        errorContainer.style.display = 'flex';
        errorDetail.style.display = 'block';
        setLoading(false);
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