DROP DATABASE IF EXISTS movie_db;
CREATE DATABASE movie_db;

USE movie_db;

CREATE TABLE movies (
  id INT AUTO_INCREMENT NOT NULL,
  movie_name VARCHAR(100) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE reviews (
  id INT AUTO_INCREMENT NOT NULL,
  review TEXT NOT NULL,
  movie_id INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (movie_id) REFERENCES movies(id)
);
