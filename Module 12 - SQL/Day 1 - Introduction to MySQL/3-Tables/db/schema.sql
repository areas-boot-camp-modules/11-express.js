-- Creates the “books_db” database.
DROP DATABASE IF EXISTS books_db;
CREATE DATABASE books_db;

USE books_db;

-- Add “biography” table.
CREATE TABLE biography (
    id INT NOT NULL,
    name VARCHAR(100) NOT NULL
);
