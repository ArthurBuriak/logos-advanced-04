let toSignIn = document.querySelector(".to-sign-in");
let toSignUp = document.querySelector(".to-sign-up");
let signUp = document.querySelector(".sign-up");
let signIn = document.querySelector(".sign-in");
let signUpButton = document.querySelector(".button");
let buttonGreen = document.querySelector(".green");
let profileCard = document.querySelector(".profile-card");
let profileSignUp = document.querySelector(".profile-sign-up");
let fullLocalStorage = [];
let idCount = 1;
signUpButton.addEventListener("click", function () {
    let firstName = document.querySelector(".first-name");
    let lastName = document.querySelector(".last-name");
    let email = document.querySelector(".email");
    let password = document.querySelector(".password");

    let user = {
        id: idCount,
        name: firstName.value,
        lastname: lastName.value,
        email: email.value,
        password: password.value
    }


    


});


toSignIn.addEventListener("click", function () {

    signUp.style.display = "none";
    signIn.style.display = "block";

});


toSignUp.addEventListener("click", function () {

    signUp.style.display = "block";
    signIn.style.display = "none";

});

let userData = [];
buttonGreen.addEventListener("click", function () {

    let signInEmail = document.querySelector(".sign-in-email");
    let signInPassword = document.querySelector(".sign-in-password");
    let profileName = document.querySelector(".profile-name");
    let profileEmail = document.querySelector(".profile-email");

    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        // alert(`${key}: ${localStorage.getItem(key)}`);
        // console.log(JSON.parse(localStorage.getItem(key)));
        userData.push(JSON.parse(localStorage.getItem(key)));
    }


    for (let j = 0; j < userData.length; j++) {
        if (signInEmail.value == userData[j].email && signInPassword.value == userData[j].password) {
            alert(userData[j].email + " " + userData[j].password);
            profileName.textContent = userData[j].name + " " + userData[j].lastname;
            profileEmail.textContent = userData[j].email;
            console.log(userData);
            signIn.style.display = "none";
            profileCard.style.display = "block";
            break;
        }
    }




});

profileSignUp.addEventListener("click", function () {

    profileCard.style.display = "none";
    signUp.style.display = "block";

});