document.addEventListener("DOMContentLoaded", () => {
    const currentYearElement = document.getElementById("currentYear");
    const lastModifiedElement = document.getElementById("lastModified");

    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;

    currentYearElement.textContent = currentYear;
    lastModifiedElement.textContent = `Last Modified: ${lastModified}`;

    const temperature = 30; // Example static temperature in Celsius
    const windSpeed = 15; // Example static wind speed in km/h

    const windChillElement = document.getElementById("wind-chill");
    windChillElement.textContent = calculateWindChill(temperature, windSpeed);

    function calculateWindChill(temp, wind) {
        if (temp <= 10 && wind > 4.8) {
            return (
                (
                    13.12 +
                    0.6215 * temp -
                    11.37 * Math.pow(wind, 0.16) +
                    0.3965 * temp * Math.pow(wind, 0.16)
                ).toFixed(2) + " °C"
            );
        } else {
            return "N/A";
        }
    }
});
// 1. Unified Product Data Array
const products = [
    { id: 1, name: "Smart Blender", price: 49.99, image: "images/blender.webp" },
    { id: 2, name: "Wireless Headset", price: 79.99, image: "images/headset.webp" },
    { id: 3, name: "Eco Bottle", price: 15.00, image: "images/bottle.webp" },
    { id: 4, name: "Kids Shoe", price: 29.99, image: "images/shoe.webp" }
];

// 2. Initialize LocalStorage Cart
let cart = JSON.parse(localStorage.getItem('shopease_cart')) || [];

// 3. Initialize on Page Load
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount(); // Set initial cart count
    
    // Check and render grid (if on shop/home page)
    const gridContainer = document.getElementById('product-grid');
    if (gridContainer) {
        renderProducts(products); 
    }

    // Check and populate dropdown options (if on form page)
    populateProductSelect();

    // Hamburger Menu Logic
    const mainnav = document.querySelector('.navigation');
    const hambutton = document.querySelector('#menu-toggle');
    
    if (hambutton && mainnav) {
        hambutton.addEventListener('click', () => {
            mainnav.classList.toggle('show');
            hambutton.classList.toggle('show');
        });
    }
});

// 4. Populate Product Dropdown List in Form
function populateProductSelect() {
    const productSelect = document.getElementById('product-select');
    
    // Exit if the select element doesn't exist on the current page
    if (!productSelect) return;

    // Loop through products and append option elements
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.name;      // Sets submitted value to product name
        option.textContent = product.name; // Display name inside dropdown
        productSelect.appendChild(option);
    });
}

// 5. Render Products Grid using Template Literals
function renderProducts(items) {
    const grid = document.getElementById('product-grid');
    if (!grid) return;

    grid.innerHTML = items.map(product => `
        <article class="product-card card" style="text-align: center; border: 1px solid #ccc; padding-bottom: 1rem;">
            <div style="background-color: #f4cccc; padding: 2rem; margin-bottom: 1rem;">
                <img src="${product.image}" alt="${product.name}" loading="lazy" style="max-width: 100%; height: auto;">
            </div>
            <h3 style="font-size: 1rem; margin-bottom: 0.5rem;">${product.name}</h3>
            <p class="price" style="font-weight: bold; margin-bottom: 1rem;">$${product.price.toFixed(2)}</p>
            <button class="btn-primary" onclick="addToCart(${product.id})" style="padding: 0.5rem 1rem; cursor: pointer;">Add to Cart</button>
        </article>
    `).join('');
}

// 6. Add to Cart & Update LocalStorage
window.addToCart = function(productId) {
    const item = products.find(p => p.id === productId);
    if (item) {
        cart.push(item);
        localStorage.setItem('shopease_cart', JSON.stringify(cart));
        updateCartCount(); 
    }
};

// 7. Cart Counter Update
function updateCartCount() {
    const cartCountEl = document.getElementById('cart-count');
    if (cartCountEl) {
        cartCountEl.textContent = cart.length;
    }
}