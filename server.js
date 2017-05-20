const express = require('express');
const router = require('./app/route');

const app = express();

app.use('/', router);

const port = process.env.PORT || 3000

app.listen(port);

console.log('app running on port ', port);
