document.addEventListener('DOMContentLoaded', () => {
  let flashlight = document.getElementById('flashlight');
  flashlight.classList.add('off');

  let toggleLight = () => {
    if (flashlight.className.match(/off/)) {
      flashlight.classList.remove('off');
      flashlight.classList.add('on');
    } else {
      flashlight.classList.remove('on');
      flashlight.classList.add('off');
    }
  }

  flashlight.addEventListener('click', toggleLight);
});
