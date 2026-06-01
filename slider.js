document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelector(".sliders-js");
  const slideCount = document.querySelectorAll(".slide-js").length;
  const slider = document.querySelector(".slider-js");
  const radioButtons = document.querySelectorAll(".indicator-js");

  let currentIndex = 0;
  let autoPlayInterval = null;

  if (!slides || slideCount === 0) {
    console.error("Слайдер не найден!");
    return;
  }

  function goToSlide(index) {
    if (index < 0) {
      index = slideCount - 1;
    } else if (index >= slideCount) {
      index = 0;
    }

    currentIndex = index;
    slides.style.transform = `translateX(${-index * 100}%)`;

    if (radioButtons[currentIndex]) {
      radioButtons[currentIndex].checked = true;
    }
  }

  function startAutoPlay() {
    if (autoPlayInterval) return;
    autoPlayInterval = setInterval(() => {
      goToSlide(currentIndex + 1);
    }, 3000);
  }

  function stopAutoPlay() {
    if (autoPlayInterval) {
      clearInterval(autoPlayInterval);
      autoPlayInterval = null;
    }
  }

  radioButtons.forEach((radio, index) => {
    radio.addEventListener("change", () => {
      if (radio.checked) {
        stopAutoPlay();
        goToSlide(index);
        startAutoPlay();
      }
    });
  });

  if (slider) {
    slider.addEventListener("mouseenter", stopAutoPlay);
    slider.addEventListener("mouseleave", startAutoPlay);
  }

  goToSlide(0);
  startAutoPlay();
});
