const deleteButtons = document.querySelectorAll('.cartItem__del');

deleteButtons.forEach(button => {
    button.addEventListener('click', function() {
        const cartItem = button.closest('.cartItem');
        cartItem.remove();
    });
});
