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

module.exports = {
    createProject,
};
