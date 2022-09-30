# Day 11: Events
- `themeSwitcher.addEventListener("click", funtion() ... )`
- The above uses an anonymous function. That’s useful for not “poluting the name space”.
- Should review decalred versus anonymous functions again. Seems like there are best practices for when to choose which.
- JavaScript in HTML get run on page load, FYI.
- It’s common to use a span with an ID to make changes to something like a counter.
---
- `.preventDefauly()` prevents the default browser action.
- There may be certain use cases where this is useful.
- You might want to do this for single-page apps. For example, you probably don’t want to reload the page when someone submits a form.
- NaN = not a number.
---
- Event bubbling. Should re-review.
- There `target` and `currentTarget`.
- It happens when you click an element and propogates up through the DOM. You can stop this behaviour with `event.stopPropagation()`.
- `aria-role="img"` is for accessiblity (should review similar attributes).
---
- `let variable = event.target` targets the event you’re looking for.
- What is `dataset`? When you use `data-` attributes, you can access with `dataset`.
- There might be better ways to store data?


---

[« Day 10](../../module-04/day-10/day-10-notes.md) | [All Notes](../../README.md#class-notes) | [Day 12 »](../../module-04/day-12/day-12-notes.md)
