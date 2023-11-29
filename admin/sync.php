<?php
require 'db_connection.php';

// Получение соединения с базой данных
$conn = connectToDatabase();

// Чтение данных из JSON файла
$json_data = file_get_contents('storage/creativity.json');
$data = json_decode($json_data, true);

// Вставка данных в базу данных
$sql = $conn->prepare("INSERT INTO creativity (title,  text, img) VALUES (?, ?, ?, ?)");
$sql->bind_param("ssss", $title,  $text, $img);

foreach ($data as $item) {
    $title = $item['title'];    
    // $tags = $item['tags'];
    $text = $item['text'];
    $img = isset($item['img'][0]) ? $item['img'][0] : '';

    // Выполнение запроса
    if ($sql->execute() === TRUE) {
        echo "Запись успешно добавлена!<br>";
    } else {
        echo "Ошибка при добавлении записи: " . $conn->error . "<br>";
    }
}

// Закрытие соединения
$conn->close();
?>