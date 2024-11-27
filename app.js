const faqs = document.querySelectorAll(".faq");
const paragraphs = document.querySelectorAll(".p");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faqs.forEach((item) => {
      if (item !== faq) {
        item.classList.remove("active");
      }
    });
    faq.classList.toggle("active");
  });
});
