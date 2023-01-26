let Form = document.getElementById('form');
let Name = document.getElementsByClassName("name").value;
let Surname = document.getElementsByClassName("surname").value;
let Password = document.getElementsByClassName("password").value;
let Email = document.getElementsByClassName("email").value;
let Text = document.getElementById("text")
var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

// Form.addEventListener("submit-btn", (e) => {
//     const errors = [];

//     if(errors.length>0){
//         e.preventDefault();
//         errorMessage
//     }
// }

)

function checkName() {

    if (Name.value.lenght>3) {
        Name.classList.add('if-valid');
        Name.classList.remove('if-invalid');
        Text.innerHTML = "Email is valid";
        Text.style.color = "green"
        return true;
    }
    else{
        Name.classList.add('if-invalid');
        Name.classList.remove('if-valid');
        Text.innerHTML = "Email invalid";
        Text.style.color = "red"

        return false;
    }
}

function checkSurname() {

    if (Surname.lenght>3) {
        Name.classList.add('if-valid');
        Name.classList.remove('if-invalid');
        Text.innerHTML = "Email is valid";
        Text.style.color = "green"
        return true;
    }
    else{
        Name.classList.add('if-invalid');
        Name.classList.remove('if-valid');
        Text.innerHTML = "Email invalid";
        Text.style.color = "red"
        return false;
    }
}

function checkPassword() {
    
    
    if (Password.value>=8) {
        Name.classList.add('if-valid');
        Name.classList.remove('if-invalid');
        Text.innerHTML = "Email is valid";
        Text.style.color = "green"
        return true;
    }
    else{
        Name.classList.add('if-invalid');
        Name.classList.remove('if-valid');
        Text.innerHTML = "Email invalid";
        Text.style.color = "red"
        return false;
    }
}

function checkEmail() {

    if (Email.value.match(pattern)) {
        Name.classList.add('if-valid');
        Name.classList.remove('if-invalid');
        Text.innerHTML = "Email is valid";
        Text.style.color = "green"
        return true;
    }
    else{
        Name.classList.add('if-invalid');
        Name.classList.remove('if-valid');
        Text.innerHTML = "Email invalid";
        Text.style.color = "red"
        return false;
    }
}


// let button = document.getElementsByClassName("submit-btn");
// button.onclick = function () {
    
//     let checkPasswordResult = checkPassword();
//     let checkEmailResult = checkEmail();
//     let checkNameResult = checkName();
//     let checkSurnameResult = checkSurname();

//     if(checkPasswordResult == true && checkEmailResult == true && checkNameResult == true && checkSurnameResult == true){
//         window.location.href("https://www.google.com/")
//     }
//     else{
//         alert("invalid form valiation")
//     }
// }
