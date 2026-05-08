<?php
    // echo "<pre>";
    //     // print_r($_POST);
    //     print_r($_SERVER);
    // echo "</pre>";

    

    if ($_SERVER["REQUEST_METHOD"] === "POST") {
        $firstName = $_POST['name'] ?? '';
        $lastName = $_POST['last_name'] ?? '';
        $email = isset($_POST['email']) ? $_POST['email'] : '';
        $message = $_POST['message'] ?? '';
        $gender = isset($_POST['gender']) ? $_POST['gender'] : 'Nie wybrano';
        $hobbies = isset($_POST['hobbies']) ? $_POST['hobbies'] : [];
        $country = isset($_POST['country']) && $_POST['country'] !== '' ? $_POST['country'] : 'Nie wybrano';

        echo "Dane z formularza:<hr>$firstName, email: $email, wiadomość: $message<br>";
        echo "Płeć: $gender<br>";
        echo "Zainteresowania: ".implode(", ", $hobbies)."<br>Kraj: $country";

        

    } else {
        echo "Wypełnij formularz";
    }
?>