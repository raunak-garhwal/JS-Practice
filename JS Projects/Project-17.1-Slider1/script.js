const slides = [
  {
    img: "assets/img1.jpeg",
    caption: "City 1",
    numberText: "1 / 4",
  },
  {
    img: "assets/img2.jpeg",
    caption: "City 2",
    numberText: "2 / 4",
  },
  {
    img: "assets/img3.jpeg",
    caption: "City 3",
    numberText: "3 / 4",
  },
  {
    img: "assets/img4.jpg",
    caption: "City 4",
    numberText: "4 / 4",
  },
];

const container = document.querySelector(".slider-container");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

if (slides.length === 1) {
  prevBtn.style.display = "none";
  nextBtn.style.display = "none";
}

let data = [...slides];

container.innerHTML = data
  .map((item, index) => {
    const { img, caption, numberText } = item;
    let activeClass = "";

    // use with first approach
    // if (index === slides.length - 1) {
    //   activeClass = "last";
    // }

    if (index === 0 || slides.length <= 1) {
      activeClass = "active";
    }

    return `<div class="slide ${activeClass}" data-index=${index}>
              <div class="numberText">${numberText}</div>
              <img src=${img} alt=${caption} />
              <div class="caption">${caption}</div>
          </div>`;
  })
  .join("");

prevBtn.addEventListener("click", () => {
  moveSlides("prev");
});

nextBtn.addEventListener("click", () => {
  moveSlides("next");
});

// first approach
function moveSlides(type) {
  let activeSlide = document.querySelector(".active");
  activeSlide.classList.remove("active");

  if (type === "prev") {
    let prevElement = activeSlide.previousElementSibling;

    if (!prevElement) {
      prevElement = container.lastElementChild;
    }

    prevElement.classList.add("active");
    return;
  }

  let nextElement = activeSlide.nextElementSibling;

  if (!nextElement) {
    nextElement = container.firstElementChild;
  }

  nextElement.classList.add("active");
}

// second approach
/*function moveSlides(type) {
  let activeSlide = document.querySelector(".slide.active");
  let nextSlide = activeSlide.nextElementSibling;
  let lastSlide = document.querySelector(".slide.last");

  if (!nextSlide) {
    nextSlide = container.firstElementChild;
  }

  activeSlide.classList.remove("active");
  lastSlide.classList.remove("last");

  if (type === "prev") {
    lastSlide.classList.add("active");
    nextSlide = lastSlide.previousElementSibling;

    if (!nextSlide) {
      nextSlide = container.lastElementChild;
    }

    nextSlide.classList.add("last");
    return;
  }

  nextSlide.classList.add("active");
  activeSlide.classList.add("last");
}

prevBtn.addEventListener("click", function () {
  moveSlides("prev");
});

nextBtn.addEventListener("click", function () {
  moveSlides("next");
});*/
