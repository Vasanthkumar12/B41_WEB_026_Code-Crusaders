let explorebtn=document.getElementById("explore")
explorebtn.addEventListener("click",()=>{
    let dropdown = document.querySelector(".dropdown-content");
    dropdown.style.display = dropdown.style.display === 'flex' ? 'none' : 'flex';
})
let loginbtn = document.getElementById('log');
loginbtn.addEventListener('click', () => {
    window.location.href = 'login.html';
})
const loginButton = document.getElementById('loginButton');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

loginButton.addEventListener('click', () => {
    let valid = true;

    if (!emailInput.value.trim()) {
        emailError.style.display = 'block';
        valid = false;
    } else {
        emailError.style.display = 'none';
    }

    if (!passwordInput.value.trim()) {
        passwordError.style.display = 'block';
        valid = false;
    } else {
        passwordError.style.display = 'none';
    }

    if (valid) {
        loginButton.classList.add('active');
    }
});

