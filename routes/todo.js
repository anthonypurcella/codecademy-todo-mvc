const express = require('express');
const {create, read, removeTodo} = require('../controller');

const router = express.Router();

router.post('/todo/create', create);
router.get('/todos', read);
router.delete('/todos/:id', removeTodo);

module.exports = router;