const btn = document.querySelector('.register__btn-disabled');
const emailInput = document.getElementById('emailInput');
const passwordInput = document.getElementById('passwordInput');
const checkbox = document.querySelector('.register__checkbox')

function checkInputs() {
    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();

    const emailIsValid = validateEmail(emailValue);
    const passwordIsValid = passwordValue.length >= 8;

    emailInput.classList.toggle('invalid', !emailIsValid);
    passwordInput.classList.toggle('invalid', !passwordIsValid);

    btn.disabled = !(emailIsValid && passwordIsValid && checkbox.checked === true);

    if (btn.disabled === true) {
        btn.classList.remove('register__btn');
        btn.classList.add('register__btn-disabled');
    }
    else {
        btn.classList.remove('register__btn-disabled');
        btn.classList.add('register__btn');
    }
}

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

emailInput.addEventListener('input', checkInputs);
passwordInput.addEventListener('input', checkInputs);
checkbox.addEventListener('input', checkInputs)