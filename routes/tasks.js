const express = require('express');
const router = express.Router();

const Task = require('mongoose').model('Task');

router.get('/', (req, res) => {
    Task.find()
        .then((tasks) => res.json(tasks))
        .catch((err) => {
            console.error(err);
            res.sendStatus(500);
        })
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    if (typeof id === 'undefined') {
        res.sendStatus(400);
        return;
    }

    Task.findById(id)
        .then((task) => {
            if (task === null) {
                res.sendStatus(404);
            } else {
                res.json(task)
            }
        })
        .catch((err) => {
            console.error(err);
            res.sendStatus(500);
        });
});

router.put('/:id', (req, res) => {
    const contentType = req.headers['content-type'];
    const id = req.params.id;

    const name = req.body.name;

    if (typeof contentType === 'undefined' || contentType !== 'application/json' || typeof name === 'undefined' || typeof id === 'undefined') {
        res.sendStatus(400);
        return;
    }

    const updates = {
        name,
        created_date: req.body.created_date || new Date(),
        status: req.body.status || 'pending'
    };

    Task.findByIdAndUpdate(id, updates, {new: true})
        .then((savedTask) => {
            // console.log(savedTask);
            res.status(200);
            res.json({
                message: 'Task successfully updated',
                id: savedTask._id,
                name: savedTask.name,
                created_date: savedTask.created_date,
                status: savedTask.status
            });
        })
        .catch((err) => {
            console.error(err);
            res.sendStatus(500);
        })
});

router.delete('/:id', (req, res) => {
    const id = 10;

    //TODO Not found

    res.status(200);
    res.json({message: 'Task successfully updated', id});
});

module.exports = router;
