const express = require('express');
const router = express.Router();

const Task = require('mongoose').model('Task');

router.post('/task', (req, res) => {
    const contentType = req.headers['content-type'];

    if(typeof contentType === 'undefined' || contentType !== 'application/x-www-form-urlencoded') {
        res.sendStatus(400);
        return;
    }

    //TODO If exists, return 409

    const id = 10;

    res.set('Location', `/tasks/${id}`);
    res.status(201);
    res.json({message: 'Task successfully created', id});
});

module.exports = router;
