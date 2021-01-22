const router = require('express').Router();
const { Page } = require('../models');
const { addPage } = require('../views');

// why didnt object destructing work here?
const layout = require('../views/layout');

router.get('/', (req, res) => {
  console.log('Successful get to / route!');
  res.send(layout(''));
});

router.post('/', async (req, res, next) => {
  // STUDENT ASSIGNMENT:
  // add definitions for `title` and `content`
  const { title, content } = req.body;

  try {
    const page = await Page.create({
      title: Page.title,
      content: Page.content,
    });

    // make sure we only redirect *after* our save is complete! Don't forget to `await` the previous step. `create` returns a Promise.
    res.redirect('/');
  } catch (error) {
    next(error);
  }
});

router.get('/add', (req, res) => {
  console.log('Successful get to the /add page!');
  res.send(addPage());
});

module.exports = router;
