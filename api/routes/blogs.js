const express = require('express');
const { createBlog, gelAllBlogs } = require('../controllers/blogcontroller');

const router = express.Router();

// create a blog
router.post('/create', createBlog);

// get all projects
router.get('/all', gelAllBlogs);

module.exports = router;
