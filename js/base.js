var formContainer = document.getElementById('after-progress');
var progress = document.getElementById('progress');

function setLoading(value) {
  if (value) {
    progress.style.visibility = 'visible';
    formContainer.style.opacity = 0.6;
    formContainer.style['pointer-events'] = 'none';
  } else {
    progress.style.visibility = 'hidden';
    formContainer.style.opacity = 1;
    formContainer.style['pointer-events'] = 'all';
  }
}