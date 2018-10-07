const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    created_date: {
        type: Date,
        default: Date.now()
    },
    status: {
        type: String,
        enum: ['pending', 'ongoing', 'completed'],
        defaultsTo: ['pending']
    }
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;