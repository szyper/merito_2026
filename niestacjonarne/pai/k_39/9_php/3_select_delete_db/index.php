<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="./style.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Użytkownicy</title>
</head>
<body>
    <?php
        require_once "./db_connect.php";

        $sql = "SELECT * FROM `users`;";

        $result = $mysqli->query($sql);

        // echo $result->num_rows;

        if ($result->num_rows > 0) {
            echo <<< DATA
            <table>
                <tr>
                    <th>ID</th>
                    <th>Imię</th>
                    <th>Nazwisko</th>
                    <th>Email</th>
                    <th>Miasto</th>
                    <th>Data utworzenia</th>
                    <th>Opcje</th>
                </tr>
DATA;
        while ($row = $result->fetch_assoc()) {
            echo <<< USER
            <tr>
                <td>$row[id]</td>
                <td>$row[first_name]</td>
                <td>$row[last_name]</td>
                <td>$row[email]</td>
                <td>$row[country]</td>
                <td>$row[created_at]</td>
USER;
                // echo '<td><a href="test.php?zmienna=15">Usuń</a></td></tr>';
                echo '<td><a href="?delete_user_id='.$row["id"].'">Usuń</a></td></tr>';

        }
        } else {
            echo "<h3>Brak danych w tabeli użytkownicy</h3>";
        }
    ?>
</body>
</html>