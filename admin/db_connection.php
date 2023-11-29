<?php
// Подключение к базе данных
function connectToDatabase() {
    $conn = new mysqli("localhost", "root", "", "cmit");

    // Проверка подключения
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    return $conn;
}
?>