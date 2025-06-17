const form = document.getElementById('form2')
//grabs elements and data from html form using id

const email_input = document.getElementById('email-input')
const password_input = document.getElementById('password-input')

const error_message = document.getElementById('error-message')
//login page validation
function getLoginFormErrors(email, password){
    let errors = []
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
    return errors;
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


function validateForm()
{//attempt to use LocalStorage to verify user login 
    document.addEventListener('DOMContentLoaded', () => {
         // Check if a username is already saved and display it
        const enterEmail = document.getElementById('emaillog-input');
        const enterPass = document.getElementById('passwordlog-input');
        const savedEmail= localStorage.getItem('email-input');
        const savedPassword = localStorage.getItem('password-input');
        const verify = document.getElementById('verify');
        const form = document.getElementById('form2');
        form.addEventListener('submit', function(formaction) {
            formaction.preventDefault(); // Prevent form from refreshing the page
         if (enterEmail = savedEmail) {
            return true;
        }
        if (enterPass= savedPassword) {
            return true;
        }
        verify.innerText = 'Incorrect Login'
        return false;
     
        });
    });
}