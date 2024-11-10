
    let subtotal = 0;
    let discount = 0;
    const productCards = document.querySelectorAll(".product-card-1 .bg-base-100, .product-card-2 .bg-base-100");
    const subtotalField = document.getElementById("subtotal");
    const discountField = document.getElementById("discount");
    const totalField = document.getElementById("total");
    const promoCodeInput = document.getElementById("promoCodeInput");
    function updateSummary() {
        if (subtotal >= 200 && promoCodeInput.value === "SELL200") {
            discount = subtotal * 0.20;
        } else {
            discount = 0;
        }
    const total = subtotal - discount;

        subtotalField.textContent = subtotal.toFixed(2);
        discountField.textContent = discount.toFixed(2);
        totalField.textContent = total.toFixed(2);
    }

    productCards.forEach((card) => {
        card.addEventListener("click", () => {
            const price = 200; 
            subtotal += price;
            updateSummary();
        });
    });

    function applyPromoCode() {
        updateSummary(); 
    }

    document.querySelector('button[onclick="calculateSummery()"]').addEventListener("click", applyPromoCode);

    function resetCart() {
        subtotal = 0;
        discount = 0;
        promoCodeInput.value = "";
        updateSummary();
    }
    resetCart();

