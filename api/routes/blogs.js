const { Router } = require('express');
const { createBlog } = require('../controllers/projectcontroller');

const router = Router();

router.post('/create', createBlog);

module.exports = router;
