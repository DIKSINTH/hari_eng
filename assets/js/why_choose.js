document.addEventListener("DOMContentLoaded", () => {
  const featureColumns = document.querySelectorAll(".feature-column");

  const revealOnScroll = () => {
    const triggerBottom = (window.innerHeight / 5) * 4;

    featureColumns.forEach((column, index) => {
      const columnTop = column.getBoundingClientRect().top;

      if (columnTop < triggerBottom) {
        // Adding a slight delay for each item to create a "wave" effect
        setTimeout(() => {
          column.classList.add("active");
        }, index * 150);
      }
    });
  };

  // Run once on load
  revealOnScroll();

  // Run on every scroll
  window.addEventListener("scroll", revealOnScroll);
});
