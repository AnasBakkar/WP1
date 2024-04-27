function addToCart(buttonElement) {
    const productContainer = buttonElement.closest('.pro');
    const productId = productContainer.getAttribute('data-product-id');
    const productName = productContainer.querySelector('h5').textContent;
    const productPrice = productContainer.querySelector('h4').textContent;
    const productImage = productContainer.querySelector('img').src;

    console.log("product id");
    console.log(productId);
    const product = {
        id: productId,
        name: productName,
        price: productPrice,
        image: productImage,
        quantity: 1
    };

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let existingProduct = cart.find(item => item.id === productId);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push(product);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Product added to cart!');
    updateCartCount();
}

function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cart-count').textContent = totalItems; // Ensure you have an element with id 'cart-count'
}

window.onload = function() {
    updateCartCount(); // Update cart count on page load
};
