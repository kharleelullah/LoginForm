const signupForm = document.getElementById('signupForm');
//error elements
const usernameError = document.getElementById('usernameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

signupForm.addEventListener('submit', (e)=> {

    //prevents the default submit behaviour
    e.preventDefault();

    //form field element values
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    let valid = true;

    // clear previous error messages
    [usernameError, emailError, passwordError].forEach(item=>{
        item.textContent = '';
        item.style.display = 'none';
    })

    //validate username
    // the username should be at least 3 characters long
    if(username.length < 3){
        valid=false;
        usernameError.textContent = 'Username must be at least three characters long';
        usernameError.style.display = 'block';
    }

    //validate email
    const emailPattern = /^([\w.-]{2,50})@[a-z0-9]{2,20}\.[a-z0-9]/i;
    //exam-ple_.123@gmail.com
    //a-zA-Z0-9_
    if (!emailPattern.test(email)){
        valid=false;
        emailError.textContent = 'please enter a valid email address.';
        emailError.style.display = 'block';
    }

    function validatePassword(password){
        //check if password is less than 6 characters
        const lengthPattern = /\S{6,}/
        //check if password has at least a number
        const digitPattern = /\d/
        //return the test
        return lengthPattern.test(password) && digitPattern.test(password)
    }



    //validate password
    if (!validatePassword(password)){
        valid=false;
        passwordError.textContent = 'password must be 6 characters long and must contain digits.';
        passwordError.style.display = 'block';
    }

    //if form is valid, submit the form(here we just alert for demonstration)
    if (valid){
        alert('Form submitted successfully');
        //here you can add code to actually submit the form data to a server
    }
});

