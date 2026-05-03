// Optional: Simple Scroll Animation
const observerOptions = {
  threshold: 0.2,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

document.addEventListener("DOMContentLoaded", () => {
  const aboutBox = document.querySelector(".about-container");
  aboutBox.style.opacity = "0";
  aboutBox.style.transform = "translateY(30px)";
  aboutBox.style.transition = "all 0.8s ease-out";

  observer.observe(aboutBox);
});
