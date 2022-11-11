// impor modules
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// internal imports
const projects = require('./routes/projects');
const blogs = require('./routes/blogs');

//
const app = express();

// app setups
app.use(cors());
dotenv.config();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
dotenv.config();

// database connection

// application routes
app.use('/api/projects', projects);
app.use('/api/blogs', blogs);

// default routes
app.use('/', (req, res) => {
    res.status(200).json({
        message: 'server running',
    });
});

// error handlers
app.use((err, req, res, next) => {
    res.status(500).json({
        error: err,
    });
});
// not found handler
app.use((req, res, next) => {
    res.status(404).json({
        error: 'Not found!',
    });
});

// application run
app.listen(process.env.APPLICATION_PORT || 4000, () => {
    console.log(`Application running on port ${process.env.APPLICATION_PORT}`);
});
