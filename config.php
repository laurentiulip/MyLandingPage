<?php
$servername = "localhost";
$username = "root";  // Utilizator implicit XAMPP
$password = "";      // Parolă implicită XAMPP (lăsată goală)
$dbname = "shop_db";

// Conectare la baza de date
$conn = new mysqli($servername, $username, $password, $dbname);

// Verifică conexiunea
if ($conn->connect_error) {
    die("Conexiune eșuată: " . $conn->connect_error);
}
?>