const express = require('express');
const { createProject } = require('../controllers/projectcontroller');

const router = express.Router();

router.post('/create', createProject);

module.exports = router;
