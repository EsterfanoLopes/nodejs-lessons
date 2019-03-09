const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'db',
    port: '3306',
    user: 'root',
    password: 'root',
    database: 'node_complete'
});

module.exports = pool.promise();