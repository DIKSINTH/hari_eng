const items = document.querySelectorAll(".value-item");

items.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    item.style.transform = "translateX(8px)";
    item.style.transition = "0.3s ease";
  });

  item.addEventListener("mouseleave", () => {
    item.style.transform = "translateX(0)";
  });
});
