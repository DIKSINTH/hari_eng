const uploadBtns = document.querySelectorAll(".upload-btn");
const fileInputs = document.querySelectorAll(".cv-upload");
const applyBtns = document.querySelectorAll(".apply-btn");

uploadBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    fileInputs[index].click();
  });
});

fileInputs.forEach((input, index) => {
  input.addEventListener("change", () => {
    if (input.files.length > 0) {
      uploadBtns[index].innerText = "CV Added ✓";
      applyBtns[index].disabled = false;
    }
  });
});

applyBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    const roles = ["Supervisor", "Electrician", "Helper"];
    const phone = "919042594468"; // replace with your WhatsApp number

    const message = `Hello Hari Engineering, I am applying for ${roles[index]}. I have uploaded my CV and would like to apply for this position.`;

    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  });
});
