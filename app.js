const express = require('express');
const app = express();
const morgan = require('morgan');

const { db, User, Page } = require('./models');

const usersRoutes = require('./routes/users');
const wikiRoutes = require('./routes/wiki');

app.use(express.static('public'));
app.use(morgan('dev'));

// body parser
app.use(express.urlencoded({ extended: true }));
app.use('/wiki', wikiRoutes);

// db.authenticate().then(() => {
//   console.log('connected to the database');
// });

app.get('/', (req, res, next) => {
  //res.send(layout(''));
  res.redirect('/wiki');
  next();
});

const port = 3000;

const init = async () => {
  await db.sync({ force: true });

  app.listen(port, () => {
    console.log(`listening on ${port}`);
  });
};

init();
