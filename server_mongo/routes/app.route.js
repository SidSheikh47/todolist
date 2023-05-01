import express from "express"
import controller from '../controllers/app.controller.js'

const router = express.Router()

router.get('/', controller.getList)
router.post('/', controller.addItem)
router.put('/', controller.updateItem)
router.delete('/', controller.deleteItem)

export default router