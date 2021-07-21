const express = require('express');
const app = express();
const myMiddleWare = require('./my-middleware')
const port = 8085;


//Applying MiddleWare
app.use(myMiddleWare({option1: 1, option2: 2}))

app.get('/', ((req, res) => {
    let responseText = `Hello World Coming from ${req.options.option1}<br>`;
    responseText += `Hello World Coming from ${req.options.option2}<br>`;
    res.send(responseText);
}))

app.listen(port, () => {
    console.log(`The Configurable Middleware app is now running at ${port}`);
})