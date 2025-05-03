<?php

include 'config.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $product_name = $_POST['product_name'] ?? '';
    $size = $_POST['size'] ?? '';
    $quantity = $_POST['quantity'] ?? '';

    if (empty($size)) {
        die("Eroare: Selectează o mărime!");
    }

    $stmt = $conn->prepare("INSERT INTO cart_items (product_name, size, quantity) VALUES (?, ?, ?)");
    $stmt->bind_param("ssi", $product_name, $size, $quantity);

    if ($stmt->execute()) {
        echo "Produs adăugat în coș!";
    } else {
        echo "Eroare: " . $stmt->error;
    }

    $stmt->close();
    $conn->close();
}
?>
