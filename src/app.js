// 'use strict';

const express = require('express');
const template = require('hbs');

/*all app router paths in here*/
const authRoutes = require('./routes/authRouter');
const adminRoutes = require('./routes/adminRouter');
const employeeRoutes = require('./routes/employeeRouter');
const serviceRoutes = require('./routes/serviceRouter');
const appointmentRoutes = require('./routes/appoinmentRouter');
const vehicleRoutes = require('./routes/vehicleRouter');
const advertisementRoutes = require('./routes/addvertisementRouter');


const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const pjax = require('express-pjax');


const configs = require("./configs/app-config");
const db = require("./util/database");


app.use(bodyParser.urlencoded({extends: false})); // x-www-form-urlencoded <form></form>
app.use(bodyParser.json()); // application/json <form></form>


// app.use(bodyParser.urlencoded({extends:false}));
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '../src/views/template/controllers')));

// template partials path
const templatePath = path.join(__dirname, '/views');
const partialPath = path.join(__dirname, '/views/template/admin');
/*set view template */
app.set('view engine', 'hbs');
app.engine('html', require('hbs').__express);
app.set('views', templatePath);
app.use(pjax());
template.registerPartials(partialPath);
// db.execute('')

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, PUT, PATCH, DELETE , GET ,OPTIONS');
    // res.setHeader('Access-Control-Allow-Headers','Content-Type ,Authorization');
    res.setHeader('Access-Control-Allow-Headers', '*');
    next();
});


/*all app routers in here*/
app.use('/auth', authRoutes);
// app.use('/sign-up' , adminRoutes);
app.use('/admin', adminRoutes);
app.use('/employees', employeeRoutes);
app.use('/service', serviceRoutes);
app.use('/appointment', appointmentRoutes);
app.use('/vehicle', vehicleRoutes);
app.use('/advertisement', advertisementRoutes);


// app.use('/employees' , adminRoutes);
// app.use(shopRoutes);


// app.use('/login', (req, res , next)=>{
//     res.render('login',{name:'Dhanushka'});
// });


/*adding 404 ERROR PAGE*/
/*This route calls always*/
// app.use((req, res , next)=>{
//     res.status(404).sendFile(path.join(__dirname, 'views','404.html'));;
// });


app.use((error, req, res, next) => {
    res.json("SERVER ERROR PLEASE TRY AGAIN LATER.!");
});


app.listen(configs.serverPort, () => {
    console.log(`Vehicle Manager SERVER STARTING ON ${configs.serverPort}`);
});
