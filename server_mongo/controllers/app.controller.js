import model from '../models/app.model.js'

const getList = (req, res) => {
    model.find({}, (err, result) => {
        res.send(result)
    });
}

const addItem = (req, res) => {
    const data = {
        item: req.body.item,
        status: 1
    }
    
    const note = new model(data)
    note.save((err, result) => {
        res.send("Item saved successfully")
    })
}

const updateItem = (req, res) => {
    model.updateOne({_id: req.body.id}, {status: req.body.status}, (err, result) => {
        res.send("Item updated successfully")
    });
}

const deleteItem = (req, res) => {
    model.deleteOne({_id: req.body.id}, (err, result) => {
        res.send("Item deleted successfully")
    })
}

export default {getList, addItem, updateItem, deleteItem}