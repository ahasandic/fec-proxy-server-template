const express = require('express');
const router = require('./server/router.js');
const path = require('path');
const morgan = require('morgan');
const port = 3001;
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const db = require('./db/index.js');


const app = express();
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'client', 'dist')));
app.use('/api', router);
app.use(bodyparser.json());

app.listen(port, () => console.log(`Listening on ${port}`));