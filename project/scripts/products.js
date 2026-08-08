

// LocalStorage key definition
const STORAGE_KEY = 'shopease_cart_items';

// Global state loaded from browser storage
let cart = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    updateCartBadge();

    // Check current page DOM structure before running page-specific scripts
    if (document.getElementById('product-grid')) {
        renderCatalog(products);
    }

    if (document.getElementById('cart-modal') || document.getElementById('cart-contents')) {
        renderCartDetails();
    }
});

/* -------------------------------------------------------------------------- */
/* 1. Mobile Menu Toggle Logic                                               */
/* -------------------------------------------------------------------------- */
function initNavigation() {
    const navToggleBtn = document.getElementById('menu-toggle');
    const mainNavList = document.getElementById('main-nav-list');

    if (navToggleBtn && mainNavList) {
        navToggleBtn.addEventListener('click', () => {
            mainNavList.classList.toggle('nav-active');
            const isExpanded = mainNavList.classList.contains('nav-active');
            navToggleBtn.setAttribute('aria-expanded', isExpanded);
        });
    }
}

/* -------------------------------------------------------------------------- */
/* 2. Cart Operations & LocalStorage Updates                                  */
/* -------------------------------------------------------------------------- */

// Function: Add items to cart (using template literal alerts)
window.addToCart = function (productId) {
    const selectedItem = products.find(p => p.id === productId);
    
    if (selectedItem) {
        // Clone object to avoid mutation issues
        cart.push({ ...selectedItem, cartInstanceId: Date.now() });
        saveCartState();
        updateCartBadge();
        
        // Optional user feedback
        showNotification(`${selectedItem.name} added to cart!`);
    }
};

// Function: Remove individual item by instance ID
window.removeFromCart = function (instanceId) {
    cart = cart.filter(item => item.cartInstanceId !== instanceId);
    saveCartState();
    updateCartBadge();
    renderCartDetails(); // Re-render view if cart view is active
};

// Function: Save state to LocalStorage
function saveCartState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
}

// Function: Update dynamic cart counter badge in navbar
function updateCartBadge() {
    const badge = document.getElementById('cart-count');
    if (badge) {
        badge.textContent = cart.length;
    }
}

/* -------------------------------------------------------------------------- */
/* 3. Cart Display & Total Calculation (Array Methods: reduce & map)         */
/* -------------------------------------------------------------------------- */
function renderCartDetails() {
    const cartContainer = document.getElementById('cart-contents');
    const totalDisplay = document.getElementById('cart-total');
    
    if (!cartContainer) return;

    if (cart.length === 0) {
        cartContainer.innerHTML = `<p class="empty-msg">Your shopping cart is currently empty.</p>`;
        if (totalDisplay) totalDisplay.textContent = "$0.00";
        return;
    }

    // Calculate total order amount using Array.prototype.reduce
    const grandTotal = cart.reduce((sum, item) => sum + item.price, 0);

    // Render items using template literals
    cartContainer.innerHTML = cart.map(item => `
        <div class="cart-item">
            <span class="item-name">${item.name}</span>
            <span class="item-price">$${item.price.toFixed(2)}</span>
            <button class="btn-remove" onclick="removeFromCart(${item.cartInstanceId})" aria-label="Remove item">
                ❌ Remove
            </button>
        </div>
    `).join('');

    if (totalDisplay) {
        totalDisplay.textContent = `$${grandTotal.toFixed(2)}`;
    }
}

/* -------------------------------------------------------------------------- */
/* 4. Checkout Handler                                                       */
/* -------------------------------------------------------------------------- */
window.processCheckout = function () {
    if (cart.length === 0) {
        alert("Your cart is empty. Add products before checking out.");
        return;
    }

    const total = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);
    
    // Process mock purchase
    alert(`Thank you for your order! Your total of $${total} has been placed.`);
    
    // Reset Cart
    cart = [];
    saveCartState();
    updateCartBadge();
    renderCartDetails();
};

function showNotification(message) {
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => toast.remove(), 2500);
}