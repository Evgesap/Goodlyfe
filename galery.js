document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelector(".galery__sliders-js");
  const slideCount = document.querySelectorAll(".galery__slide-js").length;
  const slider = document.querySelector(".galery__slider-js");
  const indicators = document.querySelectorAll(".galery__label-js");
  const radioButtons = document.querySelectorAll(".galery__indicator-js");

  let currentIndex = 0;
  let autoPlayInterval = null;

  if (!slides || slideCount === 0) {
    console.error("Слайдер не найден!");
    return;
  }

  function updateIndicators(index) {
    indicators.forEach((indicator, i) => {
      if (i === index) {
        indicator.classList.add("active");
      } else {
        indicator.classList.remove("active");
      }
    });

    if (radioButtons[index]) {
      radioButtons[index].checked = true;
    }
  }

  function goToSlide(index) {
    if (index < 0) {
      index = slideCount - 1;
    } else if (index >= slideCount) {
      index = 0;
    }

    currentIndex = index;
    slides.style.transform = `translateX(${-currentIndex * 100}%)`;
    updateIndicators(currentIndex);
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

  indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
      stopAutoPlay();
      goToSlide(index);
      startAutoPlay();
    });
  });

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
