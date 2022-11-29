-- If the “books_db” database exists, drop it.
DROP DATABASE IF EXISTS books_db;

-- Create the “books_db” database.
CREATE DATABASE books_db;

-- Use the “books_db” databases.
USE books_db;

-- Create a “biographies” table with an “id” and “name” column.
CREATE TABLE biographies (
  id INT NOT NULL,
  name VARCHAR(100) NOT NULL
);
