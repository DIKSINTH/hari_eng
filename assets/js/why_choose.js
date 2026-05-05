document.addEventListener("DOMContentLoaded", () => {
  const featureColumns = document.querySelectorAll(".feature-column");

  const revealOnScroll = () => {
    const triggerBottom = (window.innerHeight / 5) * 4;

    featureColumns.forEach((column, index) => {
      const columnTop = column.getBoundingClientRect().top;

      if (columnTop < triggerBottom) {
        setTimeout(() => {
          column.classList.add("active");
        }, index * 150);
      }
    });
  };

  revealOnScroll();
  window.addEventListener("scroll", revealOnScroll);
});
