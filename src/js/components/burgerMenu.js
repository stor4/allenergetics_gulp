const menuContainer = document.getElementById('menu__body')
const menu = document.getElementById('menu')
let isMenuOpen = false;

const lang = document.getElementById('menu_lang')
const langOpen = document.getElementById('menu_lang_open')

const menuOverlay = document.getElementById('menu-container')

function closeOut(event) {
    if (!menuContainer.contains(event.target)) {
        closeMenu()
    }
}

function openMenu() {
    menu.style.visibility = 'visible'
    menuContainer.style.transform = 'translateX(300px)'
    isMenuOpen = true
}

function closeMenu() {
    menu.style.visibility = 'hidden';
    menuContainer.style.transform = 'translateX(-300px)'
    isMenuOpen = false;
}

function openLang() {
    langOpen.style.visibility = 'visible'
    lang.style.borderBottom = 'none'
    lang.style.borderBottomLeftRadius = 0
    lang.style.borderBottomRightRadius = 0
    lang.style.backgroundColor = 'rgb(0,0,0,0.02)'
}

function closeLang() {
    langOpen.style.visibility = 'hidden'
    lang.style.borderBottom = '1px solid $green'
    lang.style.borderBottomLeftRadius = '12px'
    lang.style.borderBottomRightRadius = '12px'
    lang.style.backgroundColor = 'none'
}

window.openMenu = openMenu;
window.closeMenu = closeMenu;
window.openLang = openLang;
window.closeLang = closeLang;
window.closeOut = closeOut;