const slider = document.getElementById("slider");
let currentIndex = 0;
const totalCards = document.querySelectorAll(".card").length;

// This calculates how many cards are visible based on screen width
function getVisibleCards() {
  if (window.innerWidth <= 600) return 1;
  if (window.innerWidth <= 900) return 2;
  return 3;
}

function moveSlide(direction) {
  const visibleCards = getVisibleCards();
  const maxIndex = totalCards - visibleCards;

  currentIndex += direction;

  // Loop back logic
  if (currentIndex > maxIndex) {
    currentIndex = 0;
  } else if (currentIndex < 0) {
    currentIndex = maxIndex;
  }

  const offset = currentIndex * (100 / visibleCards);
  slider.style.transform = `translateX(-${offset}%)`;
}

// Automatic Sliding (every 3 seconds)
let autoSlide = setInterval(() => {
  moveSlide(1);
}, 3000);

// Pause auto-slide when user interacts
const container = document.querySelector(".slider-container");
container.addEventListener("mouseenter", () => clearInterval(autoSlide));
container.addEventListener("mouseleave", () => {
  autoSlide = setInterval(() => {
    moveSlide(1);
  }, 3000);
});

// Handle window resize to prevent alignment issues
window.addEventListener("resize", () => {
  currentIndex = 0;
  slider.style.transform = `translateX(0)`;
});
