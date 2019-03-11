const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const errorController = require('./controllers/error');
// const User = require('./models/user');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// app.use((req, res, next) => {
//   User.findById('5c8418a6a11d5576060972ce')
//     .then(user => {
//       req.user = new User(user.username, user.email, user.cart, user._id);
//       next();
//     }).catch(err => console.log(err));
// });

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

mongoose
  .connect(
    'mongodb+srv://nodelessons:nodelessons@node-lessons-wdsqh.mongodb.net/shop?retryWrites=true'
  )
  .then(result => {
    app.listen(3000);
  })
  .catch(err => console.log(err));