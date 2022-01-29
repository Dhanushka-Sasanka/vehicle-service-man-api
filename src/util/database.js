const mysql = require('mysql2');
const express = require('express');
const configs = require("../configs/app-config");
const session = require("express-session");
const MySQLStore = require("express-mysql-session")(session);

const app = express();

const connectionPool = mysql.createPool({
    host: configs.dbHost,
    user: configs.dbUserName,
    password: configs.dbPw,
    port: configs.dbPort,
    database: configs.dbName
});

module.exports = connectionPool.promise();

let sessionStore = new MySQLStore({
    expiration: 1800000,
    createDatabaseTable: true,
    schema: {
        tableName: 'sessionTable',
        columnNames: {
            session_id: 'session_id',
            expires: 'expires',
            data: 'data'
        }
    }
}, connectionPool.promise());


app.use(session({
    key: 'vehicle_manager',
    secret: 'my secret',
    store: sessionStore,
    resave: false,
    saveUninitialized: true
}));
