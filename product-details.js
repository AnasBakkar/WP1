// This function simulates fetching data from a server
function fetchProductDetails(productId) {
    // Simulated database
    const products = {
        '1': {
            name: 'Cartoon Astronaut T-Shirts',
            img: 'img/products/f1.jpg',
            stars: 5,
            price: '70000'
        },
        '2': {
            name: 'Roses T-Shirts',
            img: 'img/products/f2.jpg',
            stars: 5,
            price: '130000'
        },
        '3': {
            name: 'Casual T-Shirts',
            img: 'img/products/f3.jpg',
            stars: 5,
            price: '125000'
        },
        '4': {
            name: 'Cool T-Shirts',
            img: 'img/products/f4.jpg',
            stars: 5,
            price: '140000'
        },
        '5': {
            name: 'Another Cool T-Shirts',
            img: 'img/products/f5.jpg',
            stars: 5,
            price: '160000'
        },
        '6': {
            name: 'Mixed Colors T-Shirts',
            img: 'img/products/f6.jpg',
            stars: 5,
            price: '175000'
        },
        '7': {
            name: 'Cool Pants',
            img: 'img/products/f7.jpg',
            stars: 5,
            price: '120000'
        },
        '8': {
            name: 'Blowse T-Shirts',
            img: 'img/products/f8.jpg',
            stars: 5,
            price: '180000'
        },
        '9': {
            name: 'Blue Formal Shirts',
            img: 'img/products/n1.jpg',
            stars: 5,
            price: '120000'
        },
        '10': {
            name: 'Grey Formal Shirts',
            img: 'img/products/n2.jpg',
            stars: 5,
            price: '150000'
        },
        '11': {
            name: 'White Formal Shirts',
            img: 'img/products/n3.jpg',
            stars: 5,
            price: '100000'
        },
        '12': {
            name: 'Casual Shirts',
            img: 'img/products/n4.jpg',
            stars: 5,
            price: '115000'
        },
        '13': {
            name: 'Jeans Formal Shirts',
            img: 'img/products/n5.jpg',
            stars: 5,
            price: '170000'
        },
        '14': {
            name: 'Men Shorts',
            img: 'img/products/n6.jpg',
            stars: 5,
            price: '180000'
        },
        '15': {
            name: 'Light brown Shirts',
            img: 'img/products/n7.jpg',
            stars: 5,
            price: '175000'
        },
        '16': {
            name: 'Black Formal Shirts',
            img: 'img/products/n8.jpg',
            stars: 5,
            price: '90000'
        }
        // Add more products here
    };

    return products[productId];
}

function displayProductDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('product_id');
    const product = fetchProductDetails(productId);
    console.log("hi");
    if (product) {
        document.getElementById('productName').textContent = product.name;
        document.getElementById('productImage').src = product.img;
        document.getElementById('productPrice').textContent = product.price;

        let starsHtml = '';
        for (let i = 0; i < product.stars; i++) {
            starsHtml += '<i class="fas fa-star"></i>';
        }
        document.getElementById('productStars').innerHTML = starsHtml;
    }
}

function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cart-count').textContent = totalItems; // Ensure you have an element with id 'cart-count'
}

window.onload = function () {
    updateCartCount();
};

displayProductDetails();
