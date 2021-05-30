const tasks = require('../model/tasks')

exports.getAll = (req, res) => {
    tasks.find({}, (err, docs) => {
        if (err) {
            res.status(500).send({status: 'failed', message: 'No data fetched!'})
        } else {
            res.send(docs);
        }
    })
}

exports.postTask = async (req, res) => {
    const newTask = new tasks(req.body);

    await newTask.save((err, docs) => {
        if (err) {
            console.log(err);
        } else {
            res.send(docs)
        }
    });
}