
const signupButtonClicked = () => {
  let formContainer = document.getElementById("formContainer");
  let name = document.getElementById("nameInputValue").value;
  formContainer.style.display = "none";
  let loaderContainer = document.getElementById("loaderContainer");
  let successContainer = document.getElementById("successContainer");
  loaderContainer.style.display = "block";
  setTimeout(() => {  
    loaderContainer.style.display = "none";
    document.getElementById("nameSpan").innerHTML = name;
    successContainer.style.display = "block";
  }, 3000);
  
}
const signUpButton = document.getElementById("signUpButton");

signUpButton.addEventListener("click", signupButtonClicked);