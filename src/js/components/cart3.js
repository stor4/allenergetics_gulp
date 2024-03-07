const inputs = document.querySelectorAll('.cart3__input');
const payButton = document.querySelector('.cart3__btn');
const openBtn = document.querySelector('.cart3__open');
const openIcon = document.querySelector('.cart3__open-icon');
const list = document.querySelector('.cart3__list');

function checkInputs() {
    let allFilled = true;
    inputs.forEach(input => {
        if (input.value.trim() === '') {
            allFilled = false;
            return;
        }
    });

    payButton.disabled = !allFilled;
    if (allFilled) {
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

window.toggleList = toggleList

document.addEventListener('DOMContentLoaded', function() {
    checkInputs()
})

