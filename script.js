const btns = document.querySelectorAll(".faq-toggle");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    btn.parentElement.classList.toggle("active");
  });
});
