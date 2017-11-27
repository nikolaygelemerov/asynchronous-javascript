const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
    res.render(path.resolve(__dirname, '../public/views/index'));
});

module.exports = router;