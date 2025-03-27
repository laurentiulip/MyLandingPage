async function addToCart() {
    // 1. Obținem datele din formular
    const productName = "Hoodie 1"; // Sau poți extrage din HTML dacă e dinamic
    const selectedSize = document.querySelector('input[name="size"]:checked');
    const quantity = document.getElementById("quantity").value;

    // 2. Validare mărime
    if (!selectedSize) {
        alert("Selectează o mărime!");
        return;
    }

    // 3. Trimitem datele la server cu `fetch()`
    try {
        const response = await fetch("add_to_cart.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: `product_name=${encodeURIComponent(productName)}&size=${encodeURIComponent(selectedSize.nextElementSibling.textContent)}&quantity=${encodeURIComponent(quantity)}`
        });

        const result = await response.text();
        document.getElementById("message").innerHTML = result;

    } catch (error) {
        document.getElementById("message").innerHTML = "Eroare la trimiterea datelor.";
        console.error("Eroare:", error);
    }
}

// Asociem funcția la buton
document.querySelector(".add-to-cart").addEventListener("click", addToCart);