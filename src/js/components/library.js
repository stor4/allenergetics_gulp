const sort = document.getElementById('sort')
const sortList = document.getElementById('sortList')
const cats = document.getElementById('cats')
const catsList = document.getElementById('catsList')
const loadMore = document.getElementById('loadMore')
const smallCardsList = document.getElementById('smallCardsList')

function openSort() {
    sort.style.borderBottom = 'auto'
    sort.style.borderBottomLeftRadius = 0
    sort.style.borderBottomRightRadius = 0

    sortList.style.display = 'block'
}

function closeSort() {
    sort.style.borderBottom = '1px solid $green'
    sort.style.borderBottomLeftRadius = '12px'
    sort.style.borderBottomRightRadius = '12px'

    sortList.style.display = 'none'
}

function openCats() {
    cats.style.borderBottom = 'auto'
    cats.style.borderBottomLeftRadius = 0
    cats.style.borderBottomRightRadius = 0

    catsList.style.display = 'block'
}

function closeCats() {
    cats.style.borderBottom = '1px solid $green'
    cats.style.borderBottomLeftRadius = '12px'
    cats.style.borderBottomRightRadius = '12px'

    catsList.style.display = 'none'
}

window.openSort = openSort
window.closeSort = closeSort
window.openCats = openCats
window.closeCats = closeCats

const headerSwiper = new Swiper(".libraryHeaderSwiper", {
    slidesPerView: 1.3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView : 1
        },
        768: {
            slidesPerView: 1.3
        },
        948: {
            slidesPerView: 1.8
        }
    }
});

const footerSwiper = new Swiper(".libraryFooterSwiper", {
    slidesPerView: 2,
    spaceBetween: 0,
    pagination: {
      el: ".swiper-pagination",
    },
    breakpoints: {
        0: {
            slidesPerView : 1
        },
        808: {
            slidesPerView: 1.2
        },
        948: {
            slidesPerView: 1.4
        },
        1050 : {
            slidesPerView: 1.5
        }
    }
  });



