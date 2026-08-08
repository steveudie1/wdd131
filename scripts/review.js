document.addEventListener("DOMContentLoaded", () => {
    // Retrieve the current count from localStorage, defaulting to 0
    let reviewCount = Number(window.localStorage.getItem("reviewCount-ls")) || 0;

    // Increment count for this submission
    reviewCount++;

    // Save updated count back to localStorage
    localStorage.setItem("reviewCount-ls", reviewCount);

    // Display the updated count
    const countDisplay = document.getElementById("review-count");
    if (countDisplay) {
        countDisplay.textContent = reviewCount;
    }
});