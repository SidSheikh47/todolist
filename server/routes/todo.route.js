const express = require('express')
const controller = require('../controllers/todo.controller')

const router = express.Router()

router.get('/', controller.readList)
router.post('/', controller.createList)
router.put('/', controller.editList)
router.delete('/', controller.deleteList)

module.exports = router