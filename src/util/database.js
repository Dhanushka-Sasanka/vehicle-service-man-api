const mysql = require('mysql2');
const configs = require("../configs/app-config");

const connectionPool = mysql.createPool({
    host: configs.dbHost,
    user: configs.dbUserName,
    password: configs.dbPw,
    port: configs.dbPort,
    database: configs.dbName
});

module.exports = connectionPool.promise();
