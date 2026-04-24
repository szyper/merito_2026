CREATE DATABASE db;

USE db;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users (first_name, last_name, email) VALUES
('Jan', 'Kowalski', 'jan.kowalski@example.com'),
('Anna', 'Nowak', 'anna.nowak@example.com'),
('Piotr', 'Wiśniewski', 'piotr.wisniewski@example.com'),
('Katarzyna', 'Wójcik', 'katarzyna.wojcik@example.com'),
('Tomasz', 'Kamiński', 'tomasz.kaminski@example.com'),
('Magdalena', 'Lewandowska', 'magdalena.lewandowska@example.com'),
('Paweł', 'Zieliński', 'pawel.zielinski@example.com'),
('Agnieszka', 'Szymańska', 'agnieszka.szymanska@example.com'),
('Michał', 'Woźniak', 'michal.wozniak@example.com'),
('Ewa', 'Dąbrowska', 'ewa.dabrowska@example.com');