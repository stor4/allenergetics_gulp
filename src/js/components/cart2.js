const login = document.querySelector('.cart2__login')
const form = document.querySelector('.cart2__form')

function openForm() {
    form.style.display = 'flex'
}

function closeForm() {
    form.style.display = 'none'
}

window.openForm = openForm
window.closeForm = closeForm