const User = require('../models/userModel');
const bcrypt = require('bcryptjs');


exports.customerLoginView = (req, res, next) => {
    res.render('login');
};

exports.registerView = (req, res, next) => {
    res.render('register');
};

exports.registerCustomer = async (req, res, next) => {

    let email = req.body.email;
    let password = req.body.password;
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let contact = req.body.contact;
    let nic = req.body.nic;

    User.getUserByEmail(email).then(([rows, fieldSet]) => {
        // console.log(rows.length);
        // console.log(rows);

        if (rows.length !== 0) {
            return res.redirect('/auth/sign-up');
            // return res.render('register',{ message: "Email already exist.!",});
        } else {
            return bcrypt.hash(password, 12).then(hashedPassword => {
                const newUser = new User(email, hashedPassword, "CUSTOMER", firstName, lastName, contact, nic);
                return newUser.saveUser()
            }).then(() => {
                res.render('login', {
                    message: 1001,
                });
            });
        }
    }).catch(error => {
        console.log(error);
    })

}

exports.registerCustomerMobileApp = async (req, res, next) => {

    let email = req.body.email;
    let password = req.body.password;
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let contact = req.body.contact;
    let nic = req.body.nic;

    User.getUserByEmail(email).then(([rows, fieldSet]) => {
        // console.log(rows.length);
        // console.log(rows);

        if (rows.length !== 0) {
            return res.json(0);
            // return res.render('register',{ message: "Email already exist.!",});
        } else {
            return bcrypt.hash(password, 12).then(hashedPassword => {
                const newUser = new User(email, hashedPassword, "CUSTOMER", firstName, lastName, contact, nic);
                return newUser.saveUser()
            }).then(() => {
                return res.json(1);
            });
        }
    }).catch(error => {
        console.log(error);
    })

}


exports.signIn = async (req, res, next) => {

    let inputEmail = req.body.email;
    let inputPassword = req.body.password;
    let userType = req.body.userType;

    User.getUserByEmail(inputEmail).then(([rows, fieldSet]) => {

        // console.log(rows);
        console.log(inputPassword);
        // console.log(rows[0].password);

        if ((userType === "ADMIN" || userType === "EMPLOYEE") && rows.length === 0) {
            return res.redirect('/auth/login');
        } else if ((userType === "ADMIN" || userType === "EMPLOYEE") && rows.length > 0) {
            bcrypt.compare(inputPassword, rows[0].password).then(doMatch => {
                if (doMatch) {

                    req.session.isLoggedIn = true;
                    req.session.user = rows;
                    return req.session.save(err => {
                        console.log(err);
                        res.redirect('/admin/dashboard/system');
                    });
                }
                return res.redirect('/auth/login');
            })
                .catch(err => {
                    console.log(err);
                });

        }

        if (userType === "CUSTOMER" && rows.length === 0) {
            return res.json('/auth/login');
        } else if ((userType === "CUSTOMER" && rows.length > 0)) {
            bcrypt.compare(inputPassword, rows[0].password).then(doesMatch => {
                if (doesMatch) {
                    // req.session.isLoggedIn = true;
                    // req.session.user = rows;
                    return req.session.save(err => {
                        console.log(err);
                        res.json('user logged in');
                    });
                }
                return res.json('/auth/login');
            })
                .catch(err => {
                    console.log(err);
                });
        }

    }).catch(error => {
        console.log(error);
    })

};


