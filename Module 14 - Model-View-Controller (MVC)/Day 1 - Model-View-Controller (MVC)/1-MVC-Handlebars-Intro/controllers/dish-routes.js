// TODO: Add a comment indicating how this file fits into the MVC framework (is it a Model, a View, or a Controller?) and what it is responsible for handling.

// This is the “C” in MVC, i.e. the Controller. This takes user input and does something with it.

const router = require('express').Router();

// TODO: Add a comment describing the purpose of the get route
// Get dishes for the menu. It gets called when the user lands on the page.
router.get('/', async (req, res) => {
// TODO: Add a comment describing the purpose of the render method
// Renders the menu for the user, one that includes all the dishes. It goes to render the `all.handlebars` file.
  res.render('all');
});

module.exports = router;
