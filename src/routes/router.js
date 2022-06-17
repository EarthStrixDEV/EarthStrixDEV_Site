const { render } = require('ejs');
const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/home', (req, res) => {
    res.render('Home');
})

router.get('/course', (req, res) => {
    res.render('Course');
})

router.get('/course2', (req, res) => {
    res.render('Course2');
})

router.get('/course3', (req, res) => {
    res.render('Course3');
})
 
module.exports = router;