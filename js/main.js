const form = document.getElementById('form');

const fullname = document.getElementById('fullname');
const age = document.getElementById('age');
const email = document.getElementById('email');
const password = document.getElementById('password');


form.addEventListener('submit', (e) => {
    e.preventDefault(); 
    

    if (fullname.value === '' || fullname.value == null) {
        document.getElementById('fullname_error').innertext = 'Fullname must not be empty';
    }
    if (fullname.value.length <= 3) {
        document.getElementById('fullname_error').innerText = 'Fullname must be longer than 3 characters';
    } else {
        document.getElementById('fullname_error').innerText = 'Fullname success';
    }

    if (age.value === '' || age.value == null) {
        document.getElementById('age_error').innertext = 'Age must not be empty';
        return false;
    }
    if (age.value.length <= 0) {
        document.getElementById('age_error').innerText = 'Age must be longer than zero';
        
    } else {
        document.getElementById('age_error').innerText = 'Age success';
    }

    if (password.value === '' || password.value == null) {
        document.getElementById('password_error').innertext = 'Password must not be empty';
    }
    if (fullname.value.length <= 8) {
        document.getElementById('password_error').innerText = 'Password must be longer than 8 characters';
    } else {
        document.getElementById('password_error').innerText = 'Password success';
    }
    document.body.innerText=fullname.value+"\n"+age.value+"\n"+" "+email.value+"\n "+password.value;
});