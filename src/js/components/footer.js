const footerCats = document.querySelectorAll('.footer__top-nav')
const scrollToTopBtn = document.getElementById('scrollToTopButton')

const categories = [
    { color: 'e91d62', name: 'Энергия ветра' },
    { color: 'f44236', name: 'Солнечная энергия' },
    { color: '643bb3', name: 'Гидроэнергетика' },
    { color: '2295f0', name: 'Энергия приливов' },
    { color: '01bbd4', name: 'Энергия волн' },
    { color: '019587', name: 'Геотермальная энергия' },
    { color: '4dae4d', name: 'Рассеянная тепловая энергия' },
    { color: '8cc737', name: 'Энергия биомассы' },
    { color: 'fceb39', name: 'Энергия ветра' },
    { color: 'ff9800', name: 'Солнечная энергия'} ,
    { color: 'c931e4', name: 'Гидроэнертетика' },
    { color: 'bfc3de', name: 'Энергия приливов' }
];

footerCats.forEach((item) => {
    for (let i = 0; i < categories.length; i++) {
        const element = categories[i];
        const {color, name} = categories[i]
        item.innerHTML += createList(color, name)
    }
})

function createList(color, name) {
    return `
    <li class="categories__item">
        <a href="#" class="categories__name link" style="--color: #${color}">${name}</a>
    </li>
    `
}

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 50) {
        scrollToTopBtn.style.visibility = "visible";
    } else {
        scrollToTopBtn.style.visibility = "hidden"; 
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

scrollToTopBtn.onclick = scrollToTop