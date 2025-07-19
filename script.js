const form = document.getElementById("registrationForm");
const resultBox = document.querySelector(".result");
const userNameSpan = document.getElementById("user-name");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  document.querySelectorAll(".error").forEach((e) => (e.style.display = "none"));

  const fullname = document.getElementById("fullname").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirm = document.getElementById("confirm").value;

  let valid = true;

  if (fullname.length < 3) {
    showError("fullname", "Full name must be at least 3 characters");
    valid = false;
  }

  if (!email.includes("@") || email.length < 6) {
    showError("email", "Enter a valid email address");
    valid = false;
  }

  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
  if (!passwordRegex.test(password)) {
    showError(
      "password",
      "Password must have 6+ chars, a number, uppercase, and special symbol"
    );
    valid = false;
  }

  if (password !== confirm) {
    showError("confirm", "Passwords do not match");
    valid = false;
  }

  if (valid) {
    userNameSpan.textContent = fullname;
    resultBox.style.display = "block";
    resultBox.classList.add("animate");
    form.reset();
  }
});

function showError(id, message) {
  const input = document.getElementById(id);
  const error = input.nextElementSibling;
  error.textContent = message;
  error.style.display = "block";
}
