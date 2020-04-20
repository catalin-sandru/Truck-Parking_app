const express = require('express');
const { body, check } = require('express-validator');

const ParkingController = require('../controller/parkingController');

const router = express.Router();

router.get('/', ParkingController.getAllRegions);

router.post('/add-region', ParkingController.addRegion);
router.post('/region/:id', [
  body('title')
    .trim()
    .isString()
    .isLength({min: 3, max:150})
], ParkingController.addParkingSpot);

module.exports = router;