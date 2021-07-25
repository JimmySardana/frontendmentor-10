const form = document.getElementsByTagName("form")[0];
const mail = document.getElementById("mail");
const errors = document.querySelectorAll(".error");


form.addEventListener("submit", (event) => {
    if(!mail.validity.valid) {
        showError();
        event.preventDefault();
    }
});

function showError() {
    errors.forEach(error => {
        error.classList.remove("hide");
    });
}