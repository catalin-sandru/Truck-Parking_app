const express = require('express');

const ParkingController = require('../controller/parkingController');

const router = express.Router();

router.get('/', ParkingController.getAllRegions);

router.post('/add-region', ParkingController.addRegion);
router.post('/add-parking', ParkingController.addParkingSpot);

module.exports = router;