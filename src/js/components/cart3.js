const inputs = document.querySelectorAll('.cart3__input');
const payButton = document.querySelector('.cart3__btn');
const openBtn = document.querySelector('.cart3__open');
const openIcon = document.querySelector('.cart3__open-icon');
const list = document.querySelector('.cart3__list');
const emailInput = document.getElementById('email');
const numberInput = document.getElementById('number');
const termInput = document.getElementById('term');

function toggleList() {
    if (list.style.display === 'none') {
        list.style.display = 'block'
        openBtn.textContent = 'Скрыть'
        openIcon.style.transform = 'rotate(180deg)'
    } else {
        list.style.display = 'none'
        openBtn.textContent = 'Подробнее'
        openIcon.style.transform = 'rotate(0)'
    }
}

function checkInputs() {
    let allFilled = true;
    let emailValid = true;

    inputs.forEach(input => {
        if (input.value.trim() === '') {
            allFilled = false;
            return;
        }
    });

    const emailValue = emailInput.value.trim();
    emailValid = validateEmail(emailValue);

    payButton.disabled = !(allFilled && emailValid);

    if (allFilled && emailValid) {
        payButton.classList.remove('cart3__btn-disabled');
        payButton.classList.add('cart3__btn');
    } else {
        payButton.classList.remove('cart3__btn');
        payButton.classList.add('cart3__btn-disabled');
    }
}


inputs.forEach(input => {
    input.addEventListener('input', checkInputs);
});

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

window.toggleList = toggleList

document.addEventListener('DOMContentLoaded', function() {
    termInput.addEventListener('input', function(event) {
        let trimmedValue = this.value.replace(/\s/g, '');
        trimmedValue = trimmedValue.replace(/\//g, '');
        
        let formattedValue = '';
        for (let i = 0; i < trimmedValue.length; i++) {
            if (i > 0 && i % 2 === 0) {
                formattedValue += '/';
            }
            formattedValue += trimmedValue[i];
        }
    
        this.value = formattedValue;
    });

    emailInput.addEventListener('input', function(event) {
        const emailValue = this.value.trim();
        const emailIsValid = validateEmail(emailValue);
    
        if (!emailIsValid) {
            this.classList.add('invalid');
        } else {
            this.classList.remove('invalid');
        }
    });

    checkInputs()
})

