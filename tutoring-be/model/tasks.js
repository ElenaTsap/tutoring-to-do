const mongoose = require('mongoose');

const tasks = new mongoose.Schema({
    taskName: {
        type: String,
        required: true
    },
    isItDone: {
        type: Boolean,
        required: false
    },
})

module.exports = mongoose.model('tasks', tasks)