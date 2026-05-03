document.addEventListener("DOMContentLoaded", function () {
  const navCheck = document.getElementById("nav-check");
  const navLinks = document.querySelectorAll(".nav-links a");
  const cursor = document.querySelector(".electric-cursor");
  const header = document.querySelector(".main-header");

  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navCheck.checked = false;
    });
  });

  let mouseX = 0;
  let mouseY = 0;

  document.addEventListener("mousemove", function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;

    cursor.style.left = mouseX + "px";
    cursor.style.top = mouseY + "px";

    const hoveredElement = document.elementFromPoint(mouseX, mouseY);

    if (header && header.contains(hoveredElement)) {
      cursor.style.display = "none";
      document.body.classList.remove("hide-cursor");
    } else {
      cursor.style.display = "block";
      document.body.classList.add("hide-cursor");
    }
  });
});
