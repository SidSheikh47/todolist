const Mysql = require("mysql");

const connection = Mysql.createConnection({
    port: process.env.PORT,
    host: process.env.HOST,
    database: process.env.DATABASE,
    user: process.env.USER
})
connection.connect();

module.exports = connection;