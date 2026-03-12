const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const confirmError = document.getElementById('confirmError');
const signup = document.getElementById('signup');
const result = document.getElementById('result');
const inputs = document.querySelectorAll('input, select, textarea');

username.autocomplete = 'off';

inputs.forEach((input, index) => {
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            const nextInput = inputs[index + 1];
            if (nextInput) {
                nextInput.focus();
            }
        }
    });
});

function showError(el, message) {
  el.innerHTML = message;
}

function clearError(el) {
  el.innerHTML = "";
}

function validateName() {
  let value = username.value.trim();
  if (value.length < 2) {
    showError(nameError, "Name must be at least 2 characters.");
    return false;
  }
  clearError(nameError);
  return true;
}

function validateEmail() {
  let value = email.value.trim();
  if (!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))) {
    showError(emailError, "Enter a valid email address.");
    return false;
  }
  clearError(emailError);
  return true;
}

function validatePassword() {
  let value = password.value;
  if (value.length < 8) {
    showError(passwordError, "Password must be at least 8 characters.");
    return false;
  }
  clearError(passwordError);
  return true;
}

function validateConfirm() {
  let pass = password.value;
  let confirm = confirmPassword.value;
  if (confirm === "") {
    showError(confirmError, "Please confirm your password.");
    return false;
  }
  if (confirm !== pass) {
    showError(confirmError, "Passwords do not match.");
    return false;
  }
  clearError(confirmError);
  return true;
}

function validateForm() {
  let okName = validateName();
  let okEmail = validateEmail();
  let okPass = validatePassword();
  let okConfirm = validateConfirm();
  return okName && okEmail && okPass && okConfirm;
}

signup.addEventListener("submit", function (event) {
  event.preventDefault();
  result.innerHTML = "";

  if (validateForm()) {
    result.innerHTML = "Form is valid!";
    result.className = "ok";
    setTimeout(() => {
        alert("Redirecting to google.com"); 
        window.location.href = "https://www.google.com";  
    }, 2000);
  } else {
    result.innerHTML = "Please fix the errors.";
    result.className = "error";
  }
});

