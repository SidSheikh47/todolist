const connection = require('../utilities/db.config')

exports.readList = (request, response) => {
    connection.query('select * from todolist', (error, result)=>{
        if(error)
            console.log(error);
        response.send(result);
    })
}

exports.createList = (request, response) => {
    connection.query(`insert into todolist (item) values('${request.body.item}')`, (error, result)=>{
        if(error)
            console.log(error);
        response.send(result);
    })
}

exports.editList = (request, response) => {
    connection.query(`update todolist set status=${request.body.status} where id=${request.body.id}`, (error, result)=>{
        if(error)
            console.log(error);
        response.send(result);
    })
}

exports.deleteList = (request, response) => {
    connection.query(`delete from todolist where id=${request.body.id}`, (error, result)=>{
        if(error)
            console.log(error);
        response.send(result);
    })
}