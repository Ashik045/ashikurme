const express = require('express');
const { createBlog } = require('../controllers/projectcontroller');

const router = express.Router();

router.post('/create', createBlog);

module.exports = router;
