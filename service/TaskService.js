const Task = require('mongoose').model('Task');

class TaskService {

    static findAll() {
        return Task.find();
    }

    static findById(id) {
        return Task.find({_id: id});
    }

    static insert(task) {
        return Task.create(task);
    }

    static update(id, task) {
        return Task.updateOne({_id: id}, task);
    }

    static delete(id) {
        return Task.deleteOne({_id: id});
    }

}

module.exports = TaskService;