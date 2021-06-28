var formContainer = document.getElementById('after-progress');
var formContainer2 = document.getElementById('after-progress2');
var progress = document.getElementById('progress');
var progress2 = document.getElementById('progress2');

function setLoading(value) {
  if (value) {
    progress.style.visibility = 'visible';
    formContainer.style.opacity = 0.6;
    formContainer.style['pointer-events'] = 'none';
    if (progress2) {
      progress2.style.visibility = 'visible';
      formContainer2.style.opacity = 0.6;
      formContainer2.style['pointer-events'] = 'none';
    }
  } else {
    progress.style.visibility = 'hidden';
    formContainer.style.opacity = 1;
    formContainer.style['pointer-events'] = 'all';
    if (progress2) {
      progress2.style.visibility = 'hidden';
      formContainer2.style.opacity = 1;
      formContainer2.style['pointer-events'] = 'all';
    }
  }
}