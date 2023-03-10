document.addEventListener("DOMContentLoaded", () => {
    const formSign = document.getElementById("sign");
    const SignEmail = document.querySelector("#SignInput");
    const SignPassword = document.querySelector("#SignPassword");
    const Log = localStorage.getItem('savedEmail');
    const Pass = localStorage.getItem('savedPassword');
    formSign.addEventListener("submit", function (event) {
        event.preventDefault();
        if (SignPassword.value == Pass.valueOf() && SignEmail.value == Log.valueOf()) {
            window.open('https://www.google.com/');
        }
        else {
            alert("Enter correct");
        }
    })
})