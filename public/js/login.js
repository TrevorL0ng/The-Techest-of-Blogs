const loginFormHandler = async(event) =>{event.preventDefaut();
const email = document.querySelector('#loginEmail').value.trim();
const password = document.querySelector('#loginPass').value.trim();

if (email && password) {
    const response = await fetch('/api/users/login',{
        method: 'POST',
        body: JSON.stringify({email, password}),
        headers: {'Content-Type': 'application/json'}
    });
    if (response.ok){document.location.replace('/profile');}
    else{alert(response.statusText)};
}};

const signupFormHandler = async(event) =>{event.preventDefaut();
const name = document.querySelector('#signupName').value.trim();
const email = document.querySelector('#signupEmail').value.trim();
const password = document.querySelector('#signupPass').value.trim();

if (name && email && password){
    const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({name, email, password}),
        headers: {'Content-Type': 'application/json'}
    });
    if (response.ok){document.location.replace('/profile');}
    else {alert(response.statusText);}
}};

document.querySelector('.loginForm').addEventListener('sumbit', loginFormHandler);
document.querySelector('.signupForm').addEventListener('submit', signupFormHandler);
