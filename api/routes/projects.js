const express = require('express');
const {
    createProject,
    getAllProjects,
    getOneProject,
} = require('../controllers/projectcontroller');

const router = express.Router();

// create a new project
router.post('/create', createProject);

// get all projects
router.get('/all', getAllProjects);

// get a project
router.get('/:id', getOneProject);

module.exports = router;
