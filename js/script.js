// Script for navigation bar
function redirectToProductDetail(element) {
    var productId = element.getAttribute('data-product-id');
    window.location.href = 'product_details.html?product_id=' + productId;
}

function redirectToCheckout(){
    window.location.href = 'checkout.html'; // Change URL to your product detail page
}

function addToCart(buttonElement) {
    const productContainer = buttonElement.closest('.pro');
    const productId = productContainer.getAttribute('data-product-id');
    const productName = productContainer.querySelector('h5').textContent;
    const productPrice = productContainer.querySelector('h4').textContent;
    const productImage = productContainer.querySelector('img').src;

    const product = {
        id: productId,
        name: productName,
        price: productPrice,
        image: productImage,
        quantity: 1
    };

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let existingProduct = cart.find(item => item.id === productId);
    console.log('cart');
    console.log(cart);
    console.log(existingProduct)
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

function loadCartItems() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartItemsContainer = document.querySelector('.cart-items');

    // Clear current contents
    cartItemsContainer.innerHTML = '';

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        cart.forEach((item, index) => {
            const cartItemHTML = `
                <div class="cart-item">
                    <img src="${item.image}" alt="Product Image">
                    <div class="item-details">
                        <h2>${item.name}</h2>
                        <p>$${item.price.toFixed(2)}</p>
                        <div class="quantity">
                            <label for="qty-${index}">Quantity:</label>
                            <input type="number" id="qty-${index}" value="${item.quantity}" min="1" onchange="updateQuantity(${index}, this.value)">
                        </div>
                        <button class="remove-btn" onclick="removeItemFromCart(${index})">Remove</button>
                    </div>
                </div>
            `;
            cartItemsContainer.innerHTML += cartItemHTML;
        });
        updateCartSummary();
    }
}

function updateCartSummary() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    console.log('cart : ');
    console.log(cart);
    let subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    console.log('subtotal');
    console.log(subtotal)
    document.querySelector('.cart-summary p:nth-child(2)').textContent = `Subtotal: $${subtotal.toFixed(2)}`;
    document.querySelector('.cart-summary p:nth-child(4)').textContent = `Total: $${subtotal.toFixed(2)}`;
}

function updateQuantity(index, newQuantity) {
    let cart = JSON.parse(localStorage.getItem('cart'));
    cart[index].quantity = parseInt(newQuantity);
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCartItems(); // Refresh cart display
}

function removeItemFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart'));
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCartItems(); // Refresh cart display
}

