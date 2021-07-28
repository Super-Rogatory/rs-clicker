const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const PORT = 8080;


// Logger Middleware
app.use(morgan('dev'));

// Body Parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

// Serve up the public files
app.use(express.static(path.join(__dirname, '../public')));

app.use('/api/weapons', require('./weapons'));

app.listen(PORT, () => console.log(`currently listening on PORT ${PORT}`));
