const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    detail: {
        type: String,
        required: true,
    },
    images: {
        type: Array,
        required: true,
    },
    features: {
        type: Array,
        required: true,
    },
    tools: {
        type: Array,
        required: true,
    },
    liveLink: {
        type: String,
        required: true,
    },
    githubLink: {
        type: String,
        required: true,
    },
    left: {
        type: Boolean,
        default: false,
    },
});

const ProjectModel = mongoose.model('Projects', projectSchema);

module.exports = ProjectModel;
