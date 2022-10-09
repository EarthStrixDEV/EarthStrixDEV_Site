const { render } = require('ejs');
const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('Welcome');
})

router.get('/home', (req, res) => {
    res.render('Home');
})
 
module.exports = router;