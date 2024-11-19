const dots = document.querySelectorAll(".dot");
const slides = document.querySelectorAll(".slide");
let slideIndex = 0;

function updateSlide(currentIndex) {
  for (let i = 0; i < dots.length; i++) {
    slides[i].classList.remove("active");
    dots[i].classList.remove("active");
  }

  slides[currentIndex].classList.add("active");
  dots[currentIndex].classList.add("active");
}

function changeSlide(index) {
  slideIndex = index;
  updateSlide(slideIndex);
}

function prevSlide() {
  if (slideIndex > 0) {
    slideIndex -= 1;
  } else {
    slideIndex = slides.length - 1;
  }

  updateSlide(slideIndex);
}

function nextSlide() {
  if (slideIndex < slides.length - 1) {
    slideIndex += 1;
  } else {
    slideIndex = 0;
  }

  updateSlide(slideIndex);
}
