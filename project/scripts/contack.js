// Array of products to populate the dropdown
const products = [
    { id: "fc-1888", name: "Smart Blender", averagerating: 4.5 },
    { id: "fc-2050", name: "Wireless Headset", averagerating: 4.7 },
    { id: "fs-1987", name: "Eco Reusable Bottle", averagerating: 3.5 },
    { id: "ac-2000", name: "Kids Running Shoes", averagerating: 3.9 },
    { id: "jj-1969", name: "Portable Solar Charger", averagerating: 5.0 }
];

document.addEventListener("DOMContentLoaded", () => {
    // 1. Populate Product Select Menu
    const productSelect = document.getElementById("product-select");

    if (productSelect) {
        products.forEach(product => {
            const option = document.createElement("option");
            option.value = product.id;
            option.textContent = product.name;
            productSelect.appendChild(option);
        });
    }

    // 2. Track Review Submissions in LocalStorage
    const countDisplay = document.getElementById("reviewCount");
    if (countDisplay) {
        const storageKey = "numReviewsCompleted";
        let reviewCount = Number(localStorage.getItem(storageKey)) || 0;
        reviewCount++;
        localStorage.setItem(storageKey, reviewCount);
        countDisplay.textContent = reviewCount;
    }

    // 3. Dynamic Footer Dates
    const yearElem = document.getElementById("currentYear");
    const modElem = document.getElementById("lastModified");

    if (yearElem) {
        yearElem.textContent = new Date().getFullYear();
    }
    
    if (modElem) {
        modElem.textContent = `Last Modified: ${document.lastModified}`;
    }
});