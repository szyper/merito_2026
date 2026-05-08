-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 26, 2026 at 06:48 PM
-- Wersja serwera: 10.4.32-MariaDB
-- Wersja PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `first_name` varchar(100) NOT NULL,
  `last_name` varchar(100) NOT NULL,
  `email` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `email`, `created_at`) VALUES
(1, 'Jan', 'Kowalski', 'jan.kowalski@example.com', '2026-04-24 10:40:00'),
(2, 'Anna', 'Nowak', 'anna.nowak@example.com', '2026-04-24 10:40:00'),
(3, 'Piotr', 'Wiśniewski', 'piotr.wisniewski@example.com', '2026-04-24 10:40:00'),
(5, 'Tomasz', 'Kamiński', 'tomasz.kaminski@example.com', '2026-04-24 10:40:00'),
(6, 'Magdalena', 'Lewandowska', 'magdalena.lewandowska@example.com', '2026-04-24 10:40:00'),
(7, 'Paweł', 'Zieliński', 'pawel.zielinski@example.com', '2026-04-24 10:40:00'),
(8, 'Agnieszka', 'Szymańska', 'agnieszka.szymanska@example.com', '2026-04-24 10:40:00'),
(10, 'Ewa', 'Dąbrowska', 'ewa.dabrowska@example.com', '2026-04-24 10:40:00'),
(11, 'asd', 'wqe', 'sadas@o2.pl', '2026-04-24 10:41:13'),
(12, 'sad', 'sad', 'sadas@o2.pl', '2026-04-24 10:48:58');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
