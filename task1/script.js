document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const errorMsg = document.getElementById("errorMsg");

  if (!name || !email || !message) {
    errorMsg.textContent = "All fields are required!";
    return;
  }

  if (!email.includes("@")) {
    errorMsg.textContent = "Please enter a valid email!";
    return;
  }

  errorMsg.textContent = "Message sent successfully!";
});