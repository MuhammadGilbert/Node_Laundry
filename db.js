'use_strich'

const mysql = require('mysql');
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "node_laundry"
})

module.exports = db;