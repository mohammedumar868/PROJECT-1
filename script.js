let email = document.getElementById("email");
let dangerIcon = document.getElementById('danger-button');
let dangerText = document.getElementById("danger-text");
let form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    if (email.validity.typeMismatch) {
        e.preventDefault();
        dangerIcon.style.opacity = 2;
        dangerText.style.opacity = 2;
    } else {
        dangerIcon.style.opacity =0;
        dangerText.style.opacity = 0;
    }
})