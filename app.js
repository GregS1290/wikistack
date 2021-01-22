const express = require('express');
const app = express();
const morgan = require('morgan');
const layout = require('./views/layout');
const { db, User, Page } = require('./models');

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));

// db.authenticate().then(() => {
//   console.log('connected to the database');
// });

app.get('/', (req, res) => {
  res.send(layout(''));
});

const port = 3000;

const init = async () => {
  await db.sync({ force: true });

  app.listen(port, () => {
    console.log(`listening on ${port}`);
  });
};

init();
