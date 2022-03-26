

const express = require('express');
const router = express.Router();
const advertisementController = require('../controllers/advertisementController');


router.post('/createAdvertisement', advertisementController.createAdvertisement);
router.get('/getAllAdvertisements', advertisementController.fetchAllAdvertisements);
router.get('/getAdvertisementByID/:advertisementID', advertisementController.fetchAdvertisementByID);
router.delete('/removeAdvertisement/:advertisementID', advertisementController.removeAdvertisement);
router.post('/updateAdvertisement/:advertisementID', advertisementController.updateAdvertisement);

module.exports = router;
