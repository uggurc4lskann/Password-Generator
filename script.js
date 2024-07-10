const btn = document.querySelector('.btn');
const icon = document.querySelector('.icon');
const input = document.querySelector('input')
const alert = document.querySelector('.alertContainer');

btn.addEventListener('click', e => { createpassword() })
icon.addEventListener('click', e => { copyPassword() })


function copyPassword() {
    if (input.value) {
        input.select();
        navigator.clipboard.writeText(input.value);
        alert.classList.remove('active');
        setTimeout(() => {
            alert.classList.add('active')
        }, 2000)
    }
}

function createpassword() {
    const passwordLength = 12;
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";

    let password = ''
    for (let i = 0; i < passwordLength; i++) {
        const randomNumber = Math.floor(Math.random() * charset.length);
        password += charset[randomNumber]
    }

    input.value = password;
}
