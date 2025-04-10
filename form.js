function validate(e) {
    e.preventDefault();


const email = document.getElementById('email').value;
const pass = document.getElementById('password').value;
const age = document.getElementById('age').value;
const number = document.getElementById('number'). value;
const nationality = document.getElementById('nationality').value;
const male = document.getElementName('gender')[0];
const female = document.getElementName('gender')[1];
const msgBox = document.getElementById('message');

let message = ' ';

if (!male.checked && !female.checked) {
        message = "Select a gender.";
        msgBoxBox.style.color = "red";
    }
else if (email === '') {
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
else if (number ==='') {
    message = 'Mobile number must contain 11 numbers.';
    msgBox.style.color = 'red';
}   
else if (nationality ==='') {
    message = 'Input a valid nationality.';
    msgBox.style.color = 'red';
}
else {
    message = 'Congratulations you are successfully logged in!';
    msgBox.style.color = 'green' ;
}
msgBox.innerText = message;

}

