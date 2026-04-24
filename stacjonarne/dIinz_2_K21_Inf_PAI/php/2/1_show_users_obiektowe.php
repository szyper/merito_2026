<?php
    mysqli_report(MYSQLI_REPORT_OFF);
    $connection = new mysqli("localhost", "root", "", "factory");

    // print_r($connection);

    if (!$connection) {
        die("Błąd: " . $connection->connect_error);
    }

    $query = "SELECT * FROM `users`";

    $result = $connection->query($query);

    // print_r($result);

    if (!$result) {
        die("Błąd zapytania: " . $connection->error);
    }

    // echo mysqli_num_rows($result);

    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            // echo "Imię: ". $row['first_name'];
            echo <<< DATA
                ID: $row[id], imię: $row[first_name], nazwisko: $row[last_name], data urodzenia: $row[birthday]
                <hr>
DATA;
        }
    } else {
        echo "Brak danych  w tabeli users";
    }

    $connection->close();
?>

<!-- 
Liczba rekordów: 2

Użytkownik: 1
ID: 1
Imię: Jan
Nazwisko: Kowal
Data urodzenia: 2000-11-12
-------------------------------
Użytkownik: 2
ID: 3
Imię: Anna
Nazwisko: Kowal
Data urodzenia: 2000-11-12
-->