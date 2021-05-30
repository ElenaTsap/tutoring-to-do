const router = require('express').Router();
const tasksController = require('../controller/tasks')

router.get('/all', tasksController.getAll);

router.post('/new', tasksController.postTask);

module.exports = router;