/**
 * @author Dhanushka Paranavithana
 * @since 28/11/2021  00:03
 **/
// 'use strict';

const express = require('express');
const template = require('hbs');

/*all app router paths in here*/
const employeeRoutes = require('./routes/employeeRouter');
const adminRoutes = require('./routes/adminRouter');


const app = express();
const bodyParser = require('body-parser');
const path = require('path');


const configs = require("./configs/app-config");
const db = require("./util/database");


app.use(bodyParser.urlencoded({extends:false})); // x-www-form-urlencoded <form></form>
// app.use(bodyParser.json()); // application/json <form></form>


// app.use(bodyParser.urlencoded({extends:false}));
app.use(express.static(path.join(__dirname, '../public')));

// template partials path
const templatePath = path.join(__dirname, '/views');
const partialPath = path.join(__dirname, '/views/template/admin');
/*set view template */
app.set('view engine','hbs');
app.engine('html', require('hbs').__express);
app.set('views', templatePath);
template.registerPartials(partialPath);
// db.execute('')



/*all app routers in here*/
app.use('/employees' , employeeRoutes);
app.use('/admin' , adminRoutes);

// app.use('/employees' , adminRoutes);
// app.use(shopRoutes);




app.use('/login', (req, res , next)=>{
    res.render('login',{name:'Dhanushka'});
});



app.use((req, res , next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','POST, PUT, PATCH, DELETE , GET ,OPTIONS');
    // res.setHeader('Access-Control-Allow-Headers','Content-Type ,Authorization');
    res.setHeader('Access-Control-Allow-Headers','*');
    next();
});



/*adding 404 ERROR PAGE*/
/*This route calls always*/
// app.use((req, res , next)=>{
//     res.status(404).sendFile(path.join(__dirname, 'views','404.html'));;
// });




app.listen(configs.serverPort,()=>{
    console.log(`Vehicle Manager SERVER STARTING ON ${configs.serverPort}`);
});
