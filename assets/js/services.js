function toggleText(button) {
  // Find the extra-text div inside the same card as the button
  const cardContent = button.parentElement;
  const extraText = cardContent.querySelector(".extra-text");

  // Toggle the 'show' class
  extraText.classList.toggle("show");

  // Change button text
  if (extraText.classList.contains("show")) {
    button.textContent = "View Less";
  } else {
    button.textContent = "View All";
  }
}
