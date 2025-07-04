//Javascript form validation
//tells JS to use form from html code
const form = document.getElementById('form')
//grabs elements and data from html form using id
const firstname_input = document.getElementById('firstname-input')
const email_input = document.getElementById('email-input')
const password_input = document.getElementById('password-input')
const repeat_password_input = document.getElementById('repeat-password-input')
const error_message = document.getElementById('error-message')
//form submits at pressing enter or clicking 

//grabs elements and data from html form using id





form.addEventListener('submit', (e) => {
   //error listing to allow definiton of incorrect input to use to prevent submission
   let errors = []
    //if statements allow this form to be used for both login and signup page
  if (firstname_input) {
  // Signup page
  errors = getSignupFormErrors(
    firstname_input.value,
    email_input.value,
    password_input.value,
    repeat_password_input.value
  );
} else {
  // Login page
  errors = getLoginFormErrors(
    email_input.value,
    password_input.value
  );


}

  if(errors.length > 0){
     //if there are any errors prevent submit
     e.preventDefault()
     error_message.innerText = errors.join(". ")
   }
})

//login page validation
function getLoginFormErrors(email, password){
  let errors = []
  const trimmedPassword = password.trim()
  if (email === '' || email == null || email !== 'Admin@gmail') {
    errors.push('Email is invalid')
    email_input?.parentElement?.classList.add('incorrect')
  }
  if (trimmedPassword === '' || trimmedPassword !== 'zebra1234') {
    errors.push('Password is invalid')
    password_input?.parentElement?.classList.add('incorrect')
  }
  return errors
}

const allInputs = [ email_input, password_input].filter(input => input != null)
//undo red outline if fixed
allInputs.forEach(input => {
    input.addEventListener('input', () => {
        if(input.parentElement.classList.contains('incorrect')){
            input.parentElement.classList.remove('incorrect')
            error_message.innerText = ''
        }
    })
})
 // Function to check if a string is alphanumeric
function isAlphaNumeric(str) {
  // Using regular expression to check for alphanumeric characters
  return /^[a-zA-Z0-9]+$/.test(str);
}
//signup page validation
function getSignupFormErrors(firstname, email, password, repeatPassword){
    let errors = []
    //array (within function) - goes through conditions, pushes error messages if errors
    //if user doesnt enter anything then null
    if(firstname === '' || firstname == null){
        //error message popup
        errors.push('Firstname is required')
       firstname_input.parentElement.classList.add('incorrect') //adds incorrect feature for CSS
    }
       //check if alphanumeric to prevent xss
    if(isAlphaNumeric(firstname) == false){
          errors.push('Firstname should be alphanumeric ')
         firstname_input.parentElement.classList.add('incorrect')  
    }
    if(email === '' || email == null){
        //error message popup
       errors.push('Email is required')
       email_input.parentElement.classList.add('incorrect') //adds incorrect feature for CSS
    }
    if(password=== '' || password == null){
       //error message popup
       errors.push('Password is required')
       password_input.parentElement.classList.add('incorrect') //adds incorrect feature for CSS
    }
  //check password length
    if(password.length < 8){
      errors.push('Password must have at least 8 characters')
      password_input.parentElement.classList.add('incorrect')
    }
    //check if alphanumeric to prevent xss
    if(isAlphaNumeric(password) == false){
          errors.push('Password should be alphanumeric')
         password_input.parentElement.classList.add('incorrect')
         
    }
    
    if(password !== repeatPassword){
        errors.push('Password does not match repeated password')
    password_input.parentElement.classList.add('incorrect')
    repeat_password_input.parentElement.classList.add('incorrect')
   }


    return errors;
}





