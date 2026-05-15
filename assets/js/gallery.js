document.querySelectorAll(".project-card").forEach((card) => {
  const slides = card.querySelectorAll(".slides img, .slides video");
  const nextBtn = card.querySelector(".next");
  const prevBtn = card.querySelector(".prev");

  let index = 0;
  let autoSlide;

  function showSlide(i) {
    slides.forEach((slide, slideIndex) => {
      slide.classList.remove("active");

      // pause all videos when changing slide
      if (slide.tagName === "VIDEO") {
        slide.pause();
        slide.currentTime = 0;
      }

      if (slideIndex === i) {
        slide.classList.add("active");

        // autoplay video if current slide is video
        if (slide.tagName === "VIDEO") {
          slide.play();
        }
      }
    });
  }

  function nextSlide() {
    index = (index + 1) % slides.length;
    showSlide(index);
  }

  function prevSlide() {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
  }

  function startAutoSlide() {
    autoSlide = setInterval(() => {
      nextSlide();
    }, 8000); // 3 sec
  }

  function stopAutoSlide() {
    clearInterval(autoSlide);
  }

  nextBtn.addEventListener("click", () => {
    stopAutoSlide();
    nextSlide();
    startAutoSlide();
  });

  prevBtn.addEventListener("click", () => {
    stopAutoSlide();
    prevSlide();
    startAutoSlide();
  });

  // pause autoplay on hover
  card.addEventListener("mouseenter", stopAutoSlide);
  card.addEventListener("mouseleave", startAutoSlide);

  // fallback if image missing
  slides.forEach((slide) => {
    if (slide.tagName === "IMG") {
      slide.onerror = function () {
        this.src = "./assets/images/sample1.jpg";
      };
    }
  });

  showSlide(index);
  startAutoSlide();
});
// image popup zoom feature
const popup = document.getElementById("imagePopup");
const popupImg = document.getElementById("popupImg");
const closePopup = document.querySelector(".close-popup");

// all images inside slides
document.querySelectorAll(".slides img").forEach((img) => {
  img.addEventListener("click", () => {
    popup.style.display = "flex";
    popupImg.src = img.src;
  });
});

// close button
closePopup.addEventListener("click", () => {
  popup.style.display = "none";
});

// close when clicking outside image
popup.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.style.display = "none";
  }
});
