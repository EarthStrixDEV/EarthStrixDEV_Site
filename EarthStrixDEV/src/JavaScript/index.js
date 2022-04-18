const express = require('express');
const router = require('./routes/router.js');
const path = require('path');
const app = express();

app.use(router);
app.use(express.static("public"));

app.listen(3000, () => {
    console.log(">>> Server is running on port 3000 <<<");
})