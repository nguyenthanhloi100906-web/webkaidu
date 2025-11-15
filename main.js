/* ========== SLIDER ========= */
let index = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(i) {
  slides.forEach(s => s.classList.remove("active"));
  slides[i].classList.add("active");
}

document.querySelector(".next").onclick = () => {
  index = (index + 1) % slides.length;
  showSlide(index);
};

document.querySelector(".prev").onclick = () => {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
};

/* ========== DROPDOWN MOBILE (OPTIONAL) ========= */
const navItems = document.querySelectorAll(".nav-item.dropdown");

navItems.forEach(item => {
  item.addEventListener("click", () => {
    item.classList.toggle("open");
  });
});
