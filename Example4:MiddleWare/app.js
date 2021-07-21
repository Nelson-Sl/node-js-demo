const express = require('express');
const app = express();
const port = 8083;

// Logger MiddleWare
const myLogger = (req, res, next) => {
    console.log('LOGGED')
    next()
}

//Applying MiddleWare
app.use(myLogger)

app.get('/', ((req, res) => {
    res.send('Hello World!');
}))

app.listen(port, () => {
    console.log(`The Middleware app is now running at ${port}`);
})