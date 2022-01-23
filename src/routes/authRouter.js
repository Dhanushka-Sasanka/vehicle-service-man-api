const express = require('express');

const router = express.Router();
const authController = require('../controllers/authController');

router.get('/login', authController.customerLoginView);
router.get('/sign-up', authController.registerView);


router.post('/register', authController.registerCustomer);
router.post('/sign-in', authController.signIn);



module.exports = router;
