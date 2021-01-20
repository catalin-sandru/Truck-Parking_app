const express = require('express');
const { body, check } = require('express-validator');

const regEx = require('../util/regex');
const ParkingController = require('../controller/parkingController');

const router = express.Router();

router.get('/', ParkingController.getAllRegions);
router.get('/region/:id', ParkingController.getAllParking);


router.post('/add-region', ParkingController.addRegion);
router.post('/region/:id', [
  body('title')
    .trim()
    .isString()
    .isLength({min: 3, max:150}),
  body('coordinates')
    .trim()
    .isString()
    .isLength(25).withMessage('Coordinates must have 24 charachters')
    .matches(regEx),
  body('facilities')
    .not()
    .isEmpty()
    .withMessage('Please select at least one facility at this spot'),
  body('extra_info')
    .trim()
    .isString()
], ParkingController.addParkingSpot);

module.exports = router;