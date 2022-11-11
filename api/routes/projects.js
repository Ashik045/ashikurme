const { Router } = require('express');
const { createProject } = require('../controllers/projectcontroller');

const router = Router();

router.post('/create', createProject);

module.exports = router;
