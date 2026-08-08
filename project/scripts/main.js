// 1. Product Data Array 
const products = [
    { id: 1, name: "Smart Blender", price: 49.99, image: "./images/blender.webp" },
    { id: 2, name: "Wireless Headset", price: 79.99, image: "./images/headset.webp" },
    { id: 3, name: "Eco Bottle", price: 15.00, image: "./images/bottle.webp" },
    { id: 4, name: "Kids Shoe", price: 29.99, image: "./images/shoe.webp" }
];

// 2. LocalStorage Cart State
let cart = JSON.parse(localStorage.getItem('shopease_cart')) || [];

// 3. Document Initialization
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
    renderProducts(products);
    initNavigation();
    initFooterDates();
});

// 4. Render Products Function
function renderProducts(items) {
    const gridContainer = document.getElementById('product-grid');
    if (!gridContainer) return;

    gridContainer.innerHTML = items.map(product => `
        <article class="product-card">
            <div class="product-image-wrapper">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
            </div>
            <h3 style="font-size: 1rem; margin-bottom: 0.5rem;">${product.name}</h3>
            <p class="price" style="font-weight: bold; margin-bottom: 1rem;">$${product.price.toFixed(2)}</p>
            <button class="btn-primary" onclick="addToCart(${product.id})" style="cursor: pointer;">Add to Cart</button>
        </article>
    `).join('');
}

// 5. Add to Cart Handler
window.addToCart = function(productId) {
    const item = products.find(p => p.id === productId);
    if (item) {
        cart.push(item);
        localStorage.setItem('shopease_cart', JSON.stringify(cart));
        updateCartCount();
    }
};


function updateCartCount() {
    const cartCountEl = document.getElementById('cart-count');
    if (cartCountEl) {
        cartCountEl.textContent = cart.length;
    }
}

// 7. Hamburger Navigation Toggle
function initNavigation() {
    const mainNav = document.querySelector('.navigation');
    const hamButton = document.querySelector('#menu');

    if (hamButton && mainNav) {
        hamButton.addEventListener('click', () => {
            mainNav.classList.toggle('show');
            hamButton.classList.toggle('show');
        });
    }
}

// 8. Footer Dates & Last Modified Info
function initFooterDates() {
    const yearElem = document.getElementById("currentYear");
    const modElem = document.getElementById("lastModified");

    if (yearElem) {
        yearElem.textContent = new Date().getFullYear();
    }

    if (modElem) {
        modElem.textContent = `Last Modified: ${document.lastModified}`;
    }
}