const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

function showError(element, message) {
    const formControl = element.parentElement;
    formControl.classList.remove("success", "error");
    formControl.classList.add("error");

    //show message
    const mss = formControl.querySelector("small");
    mss.innerHTML = message;
}

function showSucess(element) {
    const formControl = element.parentElement;
    formControl.classList.remove("success", "error");
    formControl.classList.add("success");
}

function checkEmail(realmail) {
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (re.test(realmail.value)) {
        showSucess(realmail);  // only add success
        console.log("sasasa")
    } else {
        showError(realmail, "Email not valid"); // only add error
    }
}

function checkRequire(inputArr) {
    inputArr.forEach((input) => {
        if (input.value.trim() == '') {
            showError(input, `${upperFirstChar(input)} is require`);
        } else {
            showSucess(input);
        }
    });
}

function checkLengthInput(input, minLength, maxLength) {
    if (input.value.length < minLength) {
        showError(input, `${upperFirstChar(input)} must be at least ${minLength} characters`);
    } else if (input.value.length > maxLength) {
        showError(input, `${upperFirstChar(input)} must be less than ${maa} characters`);
    } else {
        showSucess(input);
    }
}

function checkPassword(inputOne, inputTwo) {
    if (inputOne.value !== inputTwo.value) {
        showError(inputTwo, "Passwords do not match");
    } else {
        showSucess(inputTwo);
    }

}

function upperFirstChar(input) {
    return input.id.trim().charAt(0).toUpperCase() + input.id.slice(1);
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let Array = [username, email, password, password2];
    Array.forEach((e) => {
        checkRequire([username, email, password, password2])
        checkEmail(email);
        checkLengthInput(username, 3, 15);
        checkLengthInput(password, 3, 15);
        checkLengthInput(password2, 3, 15);
        if (e.value.trim() !== '') {
            checkPassword(password, password2);
        }
    })
})