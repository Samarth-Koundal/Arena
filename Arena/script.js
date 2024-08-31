document.addEventListener('DOMContentLoaded', function() {
  const sliderIcon = document.querySelector('.slider-icon');
  const icons = sliderIcon.innerHTML;
  sliderIcon.innerHTML += icons;
  sliderIcon.classList.add('slider-track');
});


