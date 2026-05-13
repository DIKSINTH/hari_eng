document.querySelectorAll(".project-card").forEach((card) => {
  const images = card.querySelectorAll(".slides img");
  const nextBtn = card.querySelector(".next");
  const prevBtn = card.querySelector(".prev");

  let index = 0;

  function showImage(i) {
    images.forEach((img) => img.classList.remove("active"));
    images[i].classList.add("active");
  }

  nextBtn.addEventListener("click", () => {
    index = (index + 1) % images.length;
    showImage(index);
  });

  prevBtn.addEventListener("click", () => {
    index = (index - 1 + images.length) % images.length;
    showImage(index);
  });
});
