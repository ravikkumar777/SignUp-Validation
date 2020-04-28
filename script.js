var form = document.getElementById("form");
var username = document.getElementById("username");
var email = document.getElementById("email");
var password = document.getElementById("password");
var password2 = document.getElementById("password2");

// Input Error Message
function showError(input, message) {
  var formControl = input.parentElement;
  formControl.className = "form-control error";
  var small = formControl.querySelector("small");
  small.innerHTML = message;
}

// Success Outline
function showSuccess(input) {
  var formControl = input.parentElement;
  formControl.className = "form-control success";
}

// Validate Email
function validateEmail(input) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "Email is not valid..");
  }
}

// Check Required Fields
function checkRequiredFields(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
      // console.log(input.id);
      showError(input, `${fieldName(input)} is required`); // variable converts to string in `${}`
    } else {
      showSuccess(input);
    }
  });
}

// Input Length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(input, `${fieldName(input)} must be atleast ${min} characters`);
  } else if (input.value.length > max) {
    showError(input, `${fieldName(input)} must be less than ${max} characters`);
  } else {
    showSuccess(input);
  }
}

// Confirm Password
function confirmPassword(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, "Passwords do not match..");
  }
}

// Capitalize Field error name
function fieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event listener
form.addEventListener("submit", function (e) {
  e.preventDefault();

  checkRequiredFields([username, email, password, password2]);
  checkLength(username, 5, 15);
  checkLength(password, 6, 12);
  validateEmail(email);
  confirmPassword(password, password2);
});
