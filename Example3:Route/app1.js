const express = require('express');
const app = express();
const app_routes = require('./app1_router');
const port = 8082;

//routes
app.use('/', app_routes);

app.listen(port, () => {
    console.log(`Server is now listening at ${port}`);
})