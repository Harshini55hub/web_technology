let form=document.getElementById('loginForm');
let email=document.getElementById('email');
let password=document.getElementById('password');

let emailError=document.getElementById('emailError');
let passwordError=document.getElementById('passwordError');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let valid=true;

    email.textContent='';
    password.textContent='';

    if(!email.validity.valid)
    {
        emailError.textContent="enter valid email";
        emailError.style.color="red";
        email.focus();
    }else{
        emailError.textContent='';
    }

    if(password.value.length<3)
    {
        passwordError.textContent="enter minimum of 3 characters";
        passwordError.style.color="red";
        valid=false;
    }else{
        passwordError.textContent='';
    }

    if(valid)
    {
        let storeData=JSON.parse(localStorage.getItem('signupData'));
    
    if(!storeData)
    {
        alert("user not found, please sign up");
        return;
    }

    if(email.value==storeData.email && password.value==storeData.password)
    {
        alert("login successful");
        window.location.href="home.html";
    }else{
        alert('invalid credentials');
    }
}
})