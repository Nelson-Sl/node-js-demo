console.log('Hello World')

const express = require('express');
const app = express();
const port = 8081

app.get('/', function (req, res) {
    res.send('Hello World!');
    console.log('Visiting Hello World Example');
})

app.listen(port, function () {
    console.log(`Server is now listening at ${port}`);
})