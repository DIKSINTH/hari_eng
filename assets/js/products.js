document.addEventListener("DOMContentLoaded", function () {
  const descriptions = document.querySelectorAll(".product-description");

  descriptions.forEach((desc) => {
    if (desc.scrollHeight > desc.clientHeight + 5) {
      const btn = document.createElement("span");
      btn.classList.add("read-more-btn");
      btn.innerText = "Read More";

      desc.insertAdjacentElement("afterend", btn);

      btn.addEventListener("click", function () {
        desc.classList.toggle("expanded");

        if (desc.classList.contains("expanded")) {
          btn.innerText = "Read Less";
        } else {
          btn.innerText = "Read More";
        }
      });
    }
  });
});
