const express = require('express');

const router = express.Router();

const appointmentController = require('../controllers/appointmentController');


router.get('/fetchAppointments', appointmentController.fetchAppointment);
router.post('/createAppointment', appointmentController.addAppointment);
router.post('/updateAppointment/:appId', appointmentController.updateAppointment);
router.post('/deleteAppointment/:appId', appointmentController.removeAppointment);



module.exports = router;
