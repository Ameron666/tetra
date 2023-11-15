<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_FILES['file'])) {
    $uploadDir = '../../img/'; // Папка для сохранения загруженных файлов
    $fileNames = array();

    foreach ($_FILES['file']['tmp_name'] as $key => $tmp_name) {
        $originalFileName = $_FILES['file']['name'][$key]; // Исходное имя файла
        $fileExtension = pathinfo($originalFileName, PATHINFO_EXTENSION); // Извлечение расширения

        $fileRandomName = basename(uniqid('', true) . '.webp'); // Устанавливаем расширение webp
        $uploadedFile = $uploadDir . $fileRandomName;

        // Проверяем тип файла
        if ($fileExtension === 'jpg' || $fileExtension === 'jpeg' || $fileExtension === 'png') {
            // Создаем изображение из файла
            if ($fileExtension === 'jpg' || $fileExtension === 'jpeg') {
                $image = imagecreatefromjpeg($tmp_name);
            } elseif ($fileExtension === 'png') {
                $image = imagecreatefrompng($tmp_name);
            }

            // Сохраняем изображение в формате WebP
            imagewebp($image, $uploadedFile, 85);

            // Освобождаем память
            imagedestroy($image);
        } elseif ($fileExtension === 'webp') {
            // Если изображение уже в формате WebP, просто копируем его
            copy($tmp_name, $uploadedFile);
        }

        // Добавляем имя файла в массив
        $fileNames[] = $fileRandomName;
    }

    if (!empty($fileNames)) {
        echo json_encode($fileNames);
    } else {
        echo "Произошла ошибка при сохранении файлов.";
    }
} else {
    echo "Неверный запрос.";
}
?>