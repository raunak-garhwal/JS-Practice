// to expand multiple accordin at a time
const faqsList = document.querySelectorAll(".faqs-inner");

faqsList.forEach((faq) => {
  const faqBtn = faq.querySelector(".faqs-btn");

  faqBtn.addEventListener("click", function () {
    if (!this.classList.contains("show-text")) {
      this.classList.remove("show-text");
    }
    faq.classList.toggle("show-text");
  });
});

// to expand a single accordion at a time

// const faqsList = document.querySelectorAll(".faqs-inner");

// faqsList.forEach((faq) => {
//   const faqBtn = faq.querySelector(".faqs-btn");

//   faqBtn.addEventListener("click", function () {
//     faqsList.forEach((faqItem) => {
//       if (faqItem !== faq) {
//         faqItem.classList.remove("show-text");
//       }
//       faq.classList.toggle("show-text");
//     });
//   });
// });
