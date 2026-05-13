document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // stop normal form submit

    // Get form values
    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    // WhatsApp number (with country code, no + or spaces)
    const whatsappNumber = "919994186406";

    // Create message
    const whatsappMessage = `
*New Enquiry from your Website*

👤 Name: ${name}
📱 Mobile: ${phone}
📧 Email: ${email}
📝 Subject: ${subject}
💬 Message: ${message || "No message"}
    `;

    // Encode message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // Open WhatsApp
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");

    // Optional: reset form after submit
    form.reset();
  });
});
