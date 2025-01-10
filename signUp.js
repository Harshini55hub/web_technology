let form=document.getElementById('signup-form');

let username=document.getElementById('username');
let email=document.getElementById('mail');
let password=document.getElementById('password');
let confirmPassword=document.getElementById('confirmpassword');

let usernameError=document.getElementById('usernameErrors');
let mailError=document.getElementById('mailErrors');
let passwordError=document.getElementById('passwordErrors');
let confirmPasswordError=document.getElementById('confirmPasswordErrors');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    // to show the errors in client side and not send to server 
    //after click event we set valid to true
    let valid=true;
    username.textContent='';
    //by default the value should be null
    email.textContent='';
    password.textContent='';
    confirmPassword.textContent='';

    if(username.value.length<3)
    {
        usernameError.textContent="enter atleast of 3 characters";
        usernameError.style.color="red";
        valid=false;
    }
    else{
        usernameError.textContent='';
    }

    if(!email.validity.valid)
       //validity is an api which provides many boolean methods (like valid)
    // (input type in email) entered data in email format now valid will check if it is in email format or not in boolean 
    // if it is in format it will return true ! will do false ; if it is not in format it will return flase ! will do true
    {
    mailError.textContent="enter vaild mail";
    mailError.style.color="red";
    email.focus();
    //to highlight after submit in case of error
    valid=false;
    }
    else{
        mailError.textContent="";
    }

    if(password.value.length<6)
    {
        passwordError.textContent="enter minimum of 6 characters";
        passwordError.style.color="red";
        valid=false;
    }

    if(password.value!==confirmPassword.value)
    {
        confirmPasswordError.textContent="password is not matching";
        confirmPasswordError.style.color="red";
        valid=false;
    }
    else{
        confirmPasswordError.textContent='';
    }
    

    //storing data to local storage
    if(valid)
    {
        userData={
            username:username.value,
            email:email.value,
            password:password.value
        }
    }

    localStorage.setItem("signupData",JSON.stringify(userData));
    alert("signup is successfull, redirecting to login page");
    form.reset();
    window.location.href="login.html";


})


