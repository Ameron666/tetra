<?php 
session_start();
require 'rb/rb.php';

R::setup( 'mysql:host=localhost; dbname=jorlamarel_cmit', 'jorlamarel_cmit', 'r%X3LwrA');

if (!R::testConnection()) {
    exit('Нет подключения к БД');
}

function formatstr($str){
    $str = trim($str);
    $str = stripslashes($str);
    $str = htmlspecialchars($str);
    return $str;
}

?>
