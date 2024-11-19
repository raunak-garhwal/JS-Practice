const container = document.querySelector(".images-container");
const imgItems = [...container.querySelectorAll(".img-item")];

const lightbox = document.getElementById("lightbox");
const lightboxImageWrapper = document.querySelector(".lightbox-img");
const lightboxImg = document.querySelector(".lightbox-img img");
const lightboxImgCaption = document.querySelector(".lightbox-img h2");

const closeBtn = document.querySelector(".close-btn");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

const thumbnailContainer = document.querySelector(".thumbnail-images");

container.addEventListener("click", function (e) {
  openLightbox(e.target);
});

function openLightbox(selectedImage) {
  setLightboxImage(selectedImage);
  thumbnailContainer.innerHTML = imgItems
    .map((item) => {
      return `<img
      src="${item.src}"
      data-id="${item.dataset.id}"
      title="${item.title}"
      class="${
        selectedImage.dataset.id === item.dataset.id
          ? "img-thumbnail selected"
          : "img-thumbnail"
      }"
        alt="${item.alt}"
        />
        `;
    })
    .join("");

  lightbox.classList.add("open");
}

function setLightboxImage(selectedImage) {
  lightboxImg.src = selectedImage.src;
  // lightboxImageWrapper.innerHTML = selectedImage.outerHTML;
  lightboxImgCaption.textContent = selectedImage.title;
}

closeBtn.addEventListener("click", function () {
  lightbox.classList.remove("open");
});

prevBtn.addEventListener("click", function () {
  loadPreviousImage();
});

nextBtn.addEventListener("click", function () {
  loadNextImage();
});

thumbnailContainer.addEventListener("click", function (e) {
  chooseThumbnailImage(e);
});

function loadNextImage() {
  const selectedImage = thumbnailContainer.querySelector(".selected");

  const nextImage =
    selectedImage.nextElementSibling || thumbnailContainer.firstElementChild;
  selectedImage.classList.remove("selected");
  nextImage.classList.add("selected");
  setLightboxImage(nextImage);
}

function loadPreviousImage() {
  const selectedImage = thumbnailContainer.querySelector(".selected");
  const prevImage =
    selectedImage.previousElementSibling || thumbnailContainer.lastElementChild;
  selectedImage.classList.remove("selected");
  prevImage.classList.add("selected");
  setLightboxImage(prevImage);
}

function chooseThumbnailImage(e) {
  if (e.target.classList.contains("img-thumbnail")) {
    const selectedImage = thumbnailContainer.querySelector(".selected");
    selectedImage.classList.remove("selected");
    setLightboxImage(e.target);
    e.target.classList.add("selected");
  }
}
