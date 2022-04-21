<?php

session_start()

require('pdo_connect.php')

if (isset($_POST['sign-up'])) {
    $email = !empty($_POST['email']) ? trim($_POST['email']) : null;
    $password = !empty($_POST['password']) ? trim($_POST['password']) : null;

    $sql = "SELECT COUNT(email) AS num FROM users WHERE email = :email";
    $stmt = $pdo->prepare($sql)

    $stmt->bindValue(':email', $email)

    $stmt->execute();
}

?>