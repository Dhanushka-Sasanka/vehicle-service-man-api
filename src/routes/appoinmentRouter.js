const express = require('express');

const router = express.Router();

const appointmentController = require('../controllers/appointmentController');


router.get('/fetchAppointments', appointmentController.fetchAppointment);
router.post('/createAppointment', appointmentController.addAppointment);
router.get('/getAppointmentById/:appID', appointmentController.fetchAppointmentById);
router.post('/updateAppointment/:appID', appointmentController.updateAppointment);
router.post('/deleteAppointment/:appID', appointmentController.removeAppointment);



module.exports = router;
