const cartList = document.querySelector('.cart__list')
const cartTotal = document.querySelector('.cart__total')
const totalSumElement = document.querySelector('.cart__total-sum')

function updateCart() {
    if (cartList.children.length === 0) {
        cartList.textContent = 'Корзина пуста';
        cartList.style.marginRight = 0
        cartList.style.fontWeight = 500
        cartList.style.fontSize = '18px'
        cartTotal.style.display = 'none'
    }
}

function updateTotalSum() {
    let totalSum = 0;
    const cartItems = cartList.querySelectorAll('.cartItem');

    cartItems.forEach(cartItem => {
        const priceAttribute = cartItem.dataset.price;
        if (priceAttribute) {
            const price = parseFloat(priceAttribute.replace('$', ''));
            totalSum += price;
        }
    });

    totalSumElement.textContent = `$${totalSum.toFixed(2)}`;
}



document.addEventListener('DOMContentLoaded', function() {
    cartList.addEventListener('DOMSubtreeModified', updateCart);
    cartList.addEventListener('DOMSubtreeModified', updateTotalSum);

    updateCart();
    updateTotalSum();
})
