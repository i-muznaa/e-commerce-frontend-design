// --- Week 3: Basic Interactivity Script ---

// 1. Add to Cart Alert Action
document.addEventListener("DOMContentLoaded", () => {
    const addToCartBtn = document.getElementById("addToCartBtn");
    
    if (addToCartBtn) {
        addToCartBtn.addEventListener("click", () => {
            const selectedSize = document.getElementById("sizeSelect").value;
            alert(`Success! Item added to cart. Selected Size: ${selectedSize.toUpperCase()}`);
        });
    }

    // 2. Non-functional Search Bar feedback
    const searchInput = document.getElementById("searchInput");
    if (searchInput) {
        searchInput.addEventListener("keypress", (e) => {
            if (e.key === "Enter") {
                e.preventDefault();
                alert(`Searching for: "${searchInput.value}" (Header search styled & active)`);
            }
        });
    }
});