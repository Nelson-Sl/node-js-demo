console.log('Hello World')

const express = require('express');
const app = express();
const calculator = require('./module')
const port = 8082

app.get('/area', function (req, res) {
    res.send('The square area of 4 is ' + calculator.area(4));
    console.log('Area Function is used');
})

app.get('/perimeter', function (req, res) {
    res.send('The square perimeter of 4 is ' + calculator.perimeter(4));
    console.log('Perimeter Function is used');
})

app.listen(port, function () {
    console.log(`Server is now listening at ${port}`);
})