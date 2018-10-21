const Task = require('mongoose').model('Task');

class TaskService {

    static findAll() {
        return Task.find();
    }

    static findById(id) {
        return Task.findById(id);
    }

    static insert(task) {
        return Task.create(task);
    }

    static update(id, task) {
        return Task.findByIdAndUpdate(id, task);
    }

    static delete(id) {
        return Task.findByIdAndDelete(id);
    }

}

module.exports = TaskService;