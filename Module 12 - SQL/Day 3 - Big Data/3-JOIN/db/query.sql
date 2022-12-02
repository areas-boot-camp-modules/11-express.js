SELECT
    b.book_name as "Book"
  , p.price as "Price"

FROM
  favorite_books as b

LEFT JOIN
  book_prices as p
ON b.book_price = p.id

ORDER BY
  1
