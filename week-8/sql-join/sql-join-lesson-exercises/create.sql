-- don't forget your USE ...;
USE sql_intro; -- lets VS code know which DB to use

CREATE TABLE customer(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(20),
    city VARCHAR(20),
    gender INT
);

CREATE TABLE company(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(20),
    industry VARCHAR(20),
    employees INT
);