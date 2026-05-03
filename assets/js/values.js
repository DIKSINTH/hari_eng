const cards = document.querySelectorAll(".value-card");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    card.style.transform = "scale(0.97)";

    setTimeout(() => {
      card.style.transform = "";
    }, 150);
  });
});
