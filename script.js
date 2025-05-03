async function addToCart() {
    const productName = "Hoodie 1";
    const selectedSize = document.querySelector('input[name="size"]:checked');
    const quantity = document.getElementById("quantity").value;

    if (!selectedSize) {
        alert("Selectează o mărime!");
        return;
    }

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

document.querySelector(".add-to-cart").addEventListener("click", addToCart);
