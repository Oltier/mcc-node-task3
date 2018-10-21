const express = require('express');
const router = express.Router();

const TaskService = require('../service/TaskService');

router.get('/', (req, res) => {
    TaskService.findAll()
        .then((tasks) => res.json(tasks))
        .catch((err) => {
            console.error(err);
            res.sendStatus(500);
        })
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    TaskService.findById(id)
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

    if (typeof contentType === 'undefined' || contentType !== 'application/x-www-form-urlencoded') {
        res.sendStatus(400);
        return;
    }

    //TODO Not found

    const id = 10;
    const name = "name";
    const created_date = new Date();
    const status = "status";

    res.status(200);
    res.json({message: 'Task successfully updated', id, name, created_date, status});
});

router.delete('/:id', (req, res) => {
    const id = 10;

    //TODO Not found

    res.status(200);
    res.json({message: 'Task successfully updated', id});
});

module.exports = router;
