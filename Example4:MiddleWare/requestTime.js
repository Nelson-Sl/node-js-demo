const express = require('express');
const app = express();
const port = 8084;

// RequestTime MiddleWare
const requestTime = (req, res, next) => {
    req.requestTime = Date.now()
    next()
}

//Applying MiddleWare
app.use(requestTime)

app.get('/', ((req, res) => {
    let responseText = 'Hello World!<br>';
    responseText += '<small>Requested at: ' + req.requestTime +'</small>'
    res.send(responseText)
}))

app.listen(port, () => {
    console.log(`The Middleware app is now running at ${port}`);
})