const certificateImg = document.getElementById("certificateImg");
const certificatePopup = document.getElementById("certificatePopup");
const closePopup = document.getElementById("closePopup");

certificateImg.addEventListener("click", () => {
  certificatePopup.classList.add("active");
});

closePopup.addEventListener("click", () => {
  certificatePopup.classList.remove("active");
});

certificatePopup.addEventListener("click", (e) => {
  if (e.target === certificatePopup) {
    certificatePopup.classList.remove("active");
  }
});
