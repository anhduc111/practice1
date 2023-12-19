
const mysql = require('mysql2')
const connection = mysql.createConnection({
    host: 'localhost',
    port:3307,
    password:'123456',
    user: 'root',
    database: 'hoidanit'
  });
  module.exports=connection;