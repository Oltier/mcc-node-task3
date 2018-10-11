const express = require('express');
const router = express.Router();

const Task = require('mongoose').model('Task');

const task1 = {
    id: 1,
    name: "name1",
    created_date: new Date(),
    status: "ok"
};

const task2 = {
    id: 2,
    name: "name2",
    created_date: new Date(),
    status: "ok"
};

const mockTasks = [task1, task2];

router.get('/', (req, res) => {
    res.json(mockTasks);
});

router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const resp = mockTasks.filter(task => task.id === id);

    if(resp.length === 0) {
        res.sendStatus(404);
    } else {
        res.json(resp);
    }
});

router.put('/:id', (req, res) => {
    const contentType = req.headers['content-type'];

    if(typeof contentType === 'undefined' || contentType !== 'application/x-www-form-urlencoded') {
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
