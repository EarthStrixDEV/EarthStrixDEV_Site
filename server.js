const express = require('express');
const router = require('./router');
const path = require('path');
const app = express();
const port = 5000

app.use(express.static(path.join(__dirname, './frontend')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './frontend/views'));
app.use(router);

app.listen(port, () => console.log(`Server is hosting on port ${ port }`))