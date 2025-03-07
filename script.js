function validate(e) {
    e.preventDefault();


const email = document.getElementById('email').value;
const pass = document.getElementById('password').value;
const age = document.getElementById('age').value;
const msgBox = document.getElementById('message');

let message = ' ';

if (email === '') {
    message = 'Please enter a valid email.' ; 
    msgBox.style.color = 'red' ;
}
else if (pass === '') {
    message = 'Password must be conatain atleast 8 characters.';
    msgBox.style.color = 'red';
}
else if (age ==='') {
    message = 'Age must be above 12.' ;
    msgBox.style.color = 'red' ;
}
else {
    message = 'Congratulations you are successfully logged in!';
    msgBox.style.color = 'green' ;
}
msgBox.innerText = message;

}

