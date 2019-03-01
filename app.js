const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
// Engine we want to compile all views
app.set('view engine', 'pug');
// Folder to find views who will be rendered by the engine
app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

// Filter only /admin paths
app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', 'page404.html'));
});

app.listen(3000);
