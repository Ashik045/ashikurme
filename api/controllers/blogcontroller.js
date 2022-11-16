// internal import
const BlogModel = require('../models/blog');

// create a new blog
const createBlog = async (req, res) => {
    try {
        const newBlog = await new BlogModel(req.body);

        newBlog.save();

        res.status(200).json({
            message: newBlog,
        });
    } catch (error) {
        res.status(500).json({
            error: 'Failed to create Blog!',
        });
    }
};

// get all blogs from the database
const gelAllBlogs = async (req, res) => {
    try {
        const blogs = await BlogModel.find();

        res.status(200).json({
            message: blogs,
        });
    } catch (error) {
        res.status(500).json({
            error: 'Could not find any post!',
        });
    }
};

// get blog by id
const getOneBlog = async (req, res) => {
    const { id } = req.params;
    try {
        const blog = await BlogModel.findById(id);

        res.status(200).json({
            message: blog,
        });
    } catch (error) {
        res.status(500).json({
            error: 'Could not find any post!',
        });
    }
};
module.exports = {
    createBlog,
    gelAllBlogs,
    getOneBlog,
};
