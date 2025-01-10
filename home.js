let userData=JSON.parse(localStorage.getItem('signupData'));

if(!userData || !userData.email)
    // if userDatais not available in local storage alert message 
{
    alert('invalid session,please login properly');
    window.location.href="login.html";
}else{
    // let messageAlert=document.getElementById('message');
    // messageAlert.textContent=`welcome ${userData.username}`;
    alert(`welcome ${userData.username}`);
}


let logout=document.getElementById('logout');
logout.addEventListener('click',(e)=>{
    alert("you are logged out");
    e.preventDefault();
    window.location.href="login.html";
})

let men=document.getElementById('mens');
men.addEventListener('click',(e)=>{
    e.preventDefault();
    window.location.href="men.html";
})

let women=document.getElementById('women');
women.addEventListener('click',(e)=>{
    e.preventDefault();
    window.location.href="women.html";
})


