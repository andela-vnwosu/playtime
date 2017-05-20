const express = require('express');
const router = require('./app/route');

const app = express();

app.use(express.static('client'))
app.use('/api', router);

const port = process.env.PORT || 3000

app.listen(port);

console.log('app running on port ', port);
