const express = require('express');
const path = require('path');
const router = express.Router();

router.post('/', (req, res) => {
    res.send({result: 'successPost'});
});

router.get('/', (req, res) => {
    res.send({result: 'successGet'});
});

module.exports = router;