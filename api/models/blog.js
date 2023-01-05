/* eslint-disable prettier/prettier */
const mongoose = require('mongoose');

const blogSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        desc: {
            type: Array,
            required: true,
        },
        ques1: {
            type: String,
        },
        ques1Ans: {
            type: Array,
        },
        ques2: {
            type: String,
        },
        ques2Ans: {
            type: Array,
        },
        ques3: {
            type: String,
        },
        ques3Ans: {
            type: Array,
        },
        ques4: {
            type: String,
        },
        ques4Ans: {
            type: Array,
        },
        ques5: {
            type: String,
        },
        ques5Ans: {
            type: Array,
        },
        ques6: {
            type: String,
        },
        ques6Ans: {
            type: Array,
        },
        ques7: {
            type: String,
        },
        ques7Ans: {
            type: Array,
        },
        ques8: {
            type: String,
        },
        ques8Ans: {
            type: Array,
        },
        ques9: {
            type: String,
        },
        ques9Ans: {
            type: Array,
        },
        ques10: {
            type: String,
        },
        ques10Ans: {
            type: Array,
        },
        image: {
            type: String,
            required: true,
        },
        tag: {
            type: String,
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
