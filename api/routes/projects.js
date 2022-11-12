const express = require('express');
const { createProject, getAllProjects } = require('../controllers/projectcontroller');

const router = express.Router();

// create a new project
router.post('/create', createProject);

// get all projects
router.get('/all', getAllProjects);

module.exports = router;
