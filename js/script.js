
const signupButtonClicked = () => {

  let formContainer = document.getElementById("formContainer");
  let name = document.getElementById("nameInputValue").value;
  let loaderContainer = document.getElementById("loaderContainer");
  let successContainer = document.getElementById("successContainer");

  formContainer.style.display = "none";
  loaderContainer.style.display = "block";

  setTimeout(() => {
    loaderContainer.style.display = "none";
    document.getElementById("nameSpan").innerHTML = name;
    successContainer.style.display = "block";
    formContainer.style.display = "block";
  }, 3000);

}
const signUpButton = document.getElementById("signUpButton"); //variable to selector of sign up button

signUpButton.addEventListener("click", signupButtonClicked); // onClick event listener for when sign up button is clicked
