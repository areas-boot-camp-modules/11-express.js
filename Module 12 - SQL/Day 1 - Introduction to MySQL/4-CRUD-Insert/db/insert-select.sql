-- Insert (add) three rows of data into the “biographies” table, where the first value goes into the “id” column and the second value goes in the “name” column.
INSERT INTO biographies (id, name)
VALUES
  ( 001, "Diary of Anne Frank"),
  ( 002, "Frida: A Biography of Frida Kahlo"),
  ( 003, "Long Walk to Freedom")
;

-- Show everything in the “biographies” table (to verify it’s contains the data we inserted).
SELECT * FROM biographies;
