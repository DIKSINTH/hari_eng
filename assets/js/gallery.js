document.querySelectorAll(".project-card").forEach((card) => {
  const images = card.querySelectorAll(".slides img, .slides video");
  const nextBtn = card.querySelector(".next");
  const prevBtn = card.querySelector(".prev");

  let index = 0;

  function showImage(i) {
    images.forEach((img, imgIndex) => {
      img.classList.toggle("active", imgIndex === i);
    });
  }

  showImage(index);

  nextBtn.addEventListener("click", () => {
    index = (index + 1) % images.length;
    showImage(index);
  });

  prevBtn.addEventListener("click", () => {
    index = (index - 1 + images.length) % images.length;
    showImage(index);
  });

  // fallback if image missing
  images.forEach((img) => {
    img.onerror = function () {
      this.src = "./assets/images/sample1.jpg";
    };
  });
});
