<?php
    $email = $_POST["email"];
    $name = $_POST["name"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    $to      = 'MSSKGamesOfficial@gmail.com';
    $headers = 'From: '.$email       . "\r\n" .
        'Reply-To: '.$email . "\r\n" .
        'X-Mailer: PHP/' . phpversion();

    mail($to, $subject, $message, $headers);
    header("Location: support1.html");
?>