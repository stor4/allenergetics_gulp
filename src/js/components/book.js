const stars = document.querySelectorAll('.book__myrate-star');

stars.forEach((star, index) => {
    star.addEventListener('mouseover', () => {
        for (let i = index; i >= 0; i--) {
            stars[i].querySelector('use').style.fill = '#FFD700';
        }
    });

    star.addEventListener('mouseout', () => {
        stars.forEach(star => {
            star.querySelector('use').style.fill = '';
        });
    });
});
