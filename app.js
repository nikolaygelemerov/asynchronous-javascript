const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const reload = require('reload');

const homeRoutes = require('./routes/home');
const userRoutes = require('./routes/user');

app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// app.use('/assets', express.static(path.resolve(__dirname, 'public/assets')));
// app.use('/js', express.static(path.resolve(__dirname, 'public/js')));
// just use:
app.use(express.static(path.resolve(__dirname, 'public')));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    next();
});

app.use('/', homeRoutes);
app.use('/user', userRoutes);

reload(app);

app.listen(3000);