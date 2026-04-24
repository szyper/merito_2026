<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="./style.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
<?php
    require_once "db.php";

    if (!empty($_POST['first_name']) && !empty($_POST['last_name']) && !empty($_POST['email'])) {
        $first_name = $_POST['first_name'] ?? '';
        $last_name = $_POST['last_name'] ?? '';
        $email = $_POST['email'] ?? '';

        $stmt = $conn->prepare("INSERT INTO `users` (`first_name`, `last_name`, `email`) VALUES (?, ?, ?);");

        $stmt->bind_param("sss", $first_name, $last_name, $email);

        if ($stmt->execute()) {
            echo "<p class='success'>Prawidłowo dodano użytkownika</p>";
        } else {
            echo "<p class='error'>Błąd:  ". $stmt->error ."</p>";
        }
    }

?>

    <a href="./form.php">Strona główna</a>