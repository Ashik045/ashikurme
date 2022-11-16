const express = require('express');
const { createBlog, gelAllBlogs, getOneBlog } = require('../controllers/blogcontroller');

const router = express.Router();

// create a blog
router.post('/create', createBlog);

// get all blogs
router.get('/all', gelAllBlogs);

// get a blog
router.get('/:id', getOneBlog);

module.exports = router;
