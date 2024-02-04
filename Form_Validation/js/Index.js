const form = document.getElementById("form");
const Username = document.getElementById("username");
const Email = document.getElementById("email");
const Password = document.getElementById("Password");
const PasswordConfirmation = document.getElementById("Password2");
//show input errors messages

function showErrors(input, messages) {
  const formControl = input.parentElement;
  formControl.classList = "form-control error";
  // const ssmall = document.querySelectorAll("small");
  // console.log(ssmall);
  // for (let i = 0; i < ssmall.length; i++) {
  //   ssmall[i].textContent = messages;
  // }
 
}
showSucceed = (input) => {
  const formControl = input.parentElement;
  formControl.classList = "form-control success";
};



//Event listeners
form.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("Form clicked");
  if (Username.value === "") {
    showErrors(Username, "username is required");
  } 
  else {
    showSucceed(Username);
  }
  if (Email.value === "") {
    showErrors(Email, "Email is required");
  } 
  else {
    showSucceed(Email);
  }
  if (Password.value === "") {
    showErrors(Password, "Password is required");
  } 
  else {
    showSucceed(Password);
  }
  if (PasswordConfirmation.value === "") {
    showErrors(PasswordConfirmation, "PasswordConfirmation is required");
  } 
  else {
    showSucceed(PasswordConfirmation);
  }
});
