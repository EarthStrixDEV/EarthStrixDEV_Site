const express = require('express');
const path = require('path');
const router = express.Router();

router.use(express.static(path.join(__dirname, '../Templete')));

router.use('/home',(req, res) => {
    res.type('text/html');
    res.sendFile(path.join(__dirname, '../Templete' ,'Home.html'));
})

router.use('/course',(req, res) => {
    res.type('text/html');
    res.sendFile(path.join(__dirname, "../Templete", "Course.html"));
})

router.use((req, res) => {
    res.redirect('/home');
})
    

module.exports = router;