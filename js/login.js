var password = document.getElementById("password");
var errorContainer, errorDetail;

function login(e) {
  var progress = document.getElementById('progress');
  progress.style.visibility = 'visible';
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
        progress.style.visibility = 'hidden';
      }
    } else {
      document.location = request.responseURL;
    }

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