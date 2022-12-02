# Day 3 - Big Data
- Prepared statements.

```
...
db.query(`DELETE FORM course_names WHERE id = ?`, 3, (err, results) => {
	if (err) {
		console.log(err)
	}
	console.log(result)
})

```

- The query is prepared. The `?` is the value. SQL will expect a value and no more SQL than what’s prepared.
- This defeats SQL injection.
- Not 100% clear what distinguished value from not.
- Couldn’t get code to work.

---
- `GROUP BY column`
- `SUM(column)`
- `COUNT(column)`
- Add `AS` to rename.

---
JOIN!

---
- `on delete cascade` for schema to delete related data.