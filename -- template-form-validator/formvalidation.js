const form = document.getElementById("form");
const passwordOne = document.getElementById("password1");
const passwordTwo = document.getElementById("password2");
const errorMessage = document.querySelector(".error-message");
const message = document.getElementById("message");

let formValid = false;
let passwordMatch = false;

function validateForm() {
  formValid = form.checkValidity();
  console.log("<<Form valid variable>>", formValid);

  if (!formValid) {
    message.textContent = "please ensure you fill all the fields";
    message.style.borderColor = "red";
    message.style.color = "red";
    return;
  }

  if (passwordOne === passwordTwo) {
    passwordMatch = true;
    passwordOne.style.borderColor = "green";
    passwordOne.style.color = "green";
    passwordTwo.style.borderColor = "green";
    passwordTwo.style.color = "green";
  } else {
    passwordMatch = false;
    message.textContent = "Password does not match";
    message.style.borderColor = "red";
    message.style.color = "red";
    passwordOne.style.borderColor = "red";
    passwordOne.style.color = "red";
    passwordTwo.style.borderColor = "red";
    passwordTwo.style.color = "red";
  }

  if (formValid && passwordMatch) {
    message.textContent = "Thank you, user registered successfully";
    message.style.borderColor = "green";
    message.style.color = "green";
  }
}

function storeData() {
  const data = {
    fullname: form.fullname.value,
    phonenumber: form.phonenumber.value,
    email: form.email.value,
    website: form.website.value,
    password: form.password.value,
  };
}

form.addEventListener("submit", processFormData);

function processFormData(e) {
  e.preventDefault();
  validateForm();

  if (formValid && passwordMatch) {
    storeData();
  }

  return;
}
