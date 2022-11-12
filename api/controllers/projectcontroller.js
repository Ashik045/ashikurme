// internal imports
const ProjectModel = require('../models/project');

const createProject = async (req, res) => {
    try {
        const newProject = await new ProjectModel(req.body);

        newProject.save();

        res.status(200).json({
            message: newProject,
        });
    } catch (error) {
        res.status(500).json({
            error: 'Failed to create project!',
        });
    }
};

const getAllProjects = async (req, res) => {
    try {
        const projects = await ProjectModel.find();

        res.status(200).json({
            message: projects,
        });
    } catch (error) {
        res.status(500).json({
            error: 'Could not find any post!',
        });
    }
};

module.exports = {
    createProject,
    getAllProjects,
};
