const express = require('express');
const router = express.Router();

const Task = require('mongoose').model('Task');

router.post('/task', (req, res) => {
    const contentType = req.headers['content-type'];

    const name = req.body.name;

    if (typeof contentType === 'undefined' || contentType !== 'application/json' || typeof name === 'undefined') {
        res.sendStatus(400);
        return;
    }

    const task = new Task();


    task.name = name;
    task.created_date = req.body.created_date;
    task.status = req.body.status;

    Task.create(task)
        .then(() => {
            res.set('Location', `/tasks/${task._id}`);
            res.status(201);
            res.json({
                message: 'Task successfully created',
                id: task._id
            });
        })
        .catch((err) => {
            console.error(err);
            res.sendStatus(500);
        });
});

module.exports = router;
