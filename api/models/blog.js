const mongoose = require('mongoose');

const blogSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        subtitle1: {
            type: String,
            required: true,
        },
        subtitle2: {
            type: String,
            required: true,
        },
        desc: {
            type: String,
            required: true,
        },
        subdesc1: {
            type: String,
            required: true,
        },
        subdesc2: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        featured: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true },
);

const BlogModel = mongoose.model('Blogs', blogSchema);

module.exports = BlogModel;
