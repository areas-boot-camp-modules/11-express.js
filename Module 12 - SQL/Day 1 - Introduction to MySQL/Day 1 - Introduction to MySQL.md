# Day 1 - Introduction to MySQL
- Must install.
- `mysql -u root -p`
- `show databases;`
- MySQL is case agnostic.
- `CREATE DATABASE demo_db;`
- `source schema.sql;`
- `DROP DATABASE IF EXISTS demo_db;`
- SQL comments start with `--`.

---
```
DROP DATABASE IF EXISTS inventory_db;
CREATE DATABASE inventory_db;

USE inventory_db;

-- See database in use.
SELECT DATABASE()
```

---
```
CREATE TABLE table_name (
    column1 datatype,
    column2 datatype,
    column3 datatype
);
```

- `SHOW TABLES;`
- `DESCRIBE TABLES;`
- There are many datatypes, and this must be defined beforehand.
- `NOT NULL` means that there must be a value.
- MySQL uses the datatype to make storing things efficient. Choose wisely.

---
- When you use `SOURCE`, you don’t have to include a semicolon at the end.

---
- CRUD = Create, read, update, and delete.

