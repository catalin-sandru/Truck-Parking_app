const express = require('express');
const { body, check } = require('express-validator');

const regEx = require('../util/regex');
const ParkingController = require('../controller/parkingController');

const router = express.Router();

router.get('/', ParkingController.getAllRegions);

router.post('/add-region', ParkingController.addRegion);
router.post('/region/:id', [
  body('title')
    .trim()
    .isString()
    .isLength({min: 3, max:150}),
  body('coordonates')
    .trim()
    .isString()
    .isLength(25).withMessage('Coordonates must have 24 charachters')
    .matches(regEx),
  body('facilities')
    .not()
    .isEmpty()
    .withMessage('Please select at leat one facility at this spot'),
  body('extra_info')
    .trim()
    .isString()
], ParkingController.addParkingSpot);

module.exports = router;