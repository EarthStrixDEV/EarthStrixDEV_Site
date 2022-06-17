const express = require('express');
const router = require('./routes/router.js');
const path = require('path');
const app = express();
const port = 5000

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(router);

app.listen(port, () => {
    console.log("Server is running on port " + port);
})