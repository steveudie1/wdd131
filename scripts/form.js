// Array of product objects required for the review form
const products = [
    { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
    { id: "fc-2050", name: "power laces", averagerating: 4.7 },
    { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
    { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
    { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

document.addEventListener("DOMContentLoaded", () => {
    // -------------------------------------------------------------
    // 1. FORM PAGE LOGIC (form.html)
    // -------------------------------------------------------------
    const productSelect = document.getElementById("product-select");

    if (productSelect) {
        products.forEach(product => {
            const option = document.createElement("option");
            option.value = product.id;
            option.textContent = product.name;
            productSelect.appendChild(option);
        });
    }

    // -------------------------------------------------------------
    // 2. CONFIRMATION PAGE LOGIC (review.html)
    // -------------------------------------------------------------
    const countDisplay = document.getElementById("reviewCount");

    if (countDisplay) {
        const storageKey = "numReviewsCompleted";
        
        // Retrieve count from localStorage or default to 0
        let reviewCount = Number(localStorage.getItem(storageKey)) || 0;
        
        // Increment by 1 on landing
        reviewCount++;
        
        // Save back to localStorage
        localStorage.setItem(storageKey, reviewCount);
        
        // Display updated count in HTML
        countDisplay.textContent = reviewCount;
    }

    
    const yearElem = document.getElementById("currentYear");
    const modElem = document.getElementById("lastModified");

    if (yearElem) {
        yearElem.textContent = new Date().getFullYear();
    }
    
    if (modElem) {
        modElem.textContent = `Last Modification: ${document.lastModified}`;
    }
});