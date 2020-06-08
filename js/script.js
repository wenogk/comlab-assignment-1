/*
The following is the javascript code that controls the sign up form when it is submitted to provide some interaction with the user.
It includes creating a loading image using the NYU torch animation css when the button is clicked and also includes error validation
*/

const signupButtonClicked = () => { //function that will be called when sign up button is clicked

  let formContainer = document.getElementById("formContainer"); //the container for the initial form
  let name = document.getElementById("nameInputValue").value; //the current value in the name input box
  let email = document.getElementById("emailInputValue").value; //the current value in the email input box
  let loaderContainer = document.getElementById("loaderContainer"); //selector for the loading image container
  let successContainer = document.getElementById("successContainer"); //selector for the success text container
  let errorContainer = document.getElementById("errorContainer"); //selector for the error text container
  let errorMessage = ""; // default error message empty

  function validateEmail(email) { //function taken from https://stackoverflow.com/questions/7635533/validate-email-address-textbox-using-javascript
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
  const isValid = () => { // closure function to check if the name and email fields are valid and filled
    let isValidBool = true;
    errorMessage = "";
    if(!name) {
      errorMessage += "Please enter your name. "
      isValidBool = false
    }
    if(!validateEmail(email) || !email) { //check if email is valid using regex function above and also check if is empty
      errorMessage += "Please enter a valid email. "
      isValidBool = false
    }
    return isValidBool;
  }



  formContainer.style.display = "none"; //reset display to defaults
  errorContainer.style.display = "none"; //reset display to defaults
  successContainer.style.display = "none"; //reset display to defaults
  loaderContainer.style.display = "block"; //by default its loading when you click the sign up button

  let delay = (!isValid()) ? 1000 : 2500; //setting the delay of the loading image to 1 second if error and 2.5 if inputs are valid

  setTimeout(() => { // delay function\
    loaderContainer.style.display = "none"; //remove loader cus its done "loading"
    if(isValid()) { //if not error then display success message
      document.getElementById("nameSpan").innerHTML = name;
      successContainer.style.display = "block";
    } else { //if not error then display error message
      document.getElementById("errorMessage").innerHTML = "Error: " + errorMessage;
      errorContainer.style.display = "block";
    }

    formContainer.style.display = "block";

  }, delay);

}
const signUpButton = document.getElementById("signUpButton"); //variable to selector of sign up button

signUpButton.addEventListener("click", signupButtonClicked); // onClick event listener for when sign up button is clicked
