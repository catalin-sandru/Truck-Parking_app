const Region = require('../model/regionModel');
const Parking = require('../model/parkingModel');

exports.getAllRegions = async (req, res, next) => {
  try {
    const regions = await Region.find({});
    res.status(200).json({
      message: 'Region fetched succesfully',
      regions
    })
  } catch(err) {
    next(err);
  }
}

exports.addRegion = async (req, res, next) => {
  const name = req.body.name;
  const code = req.body.code;
  const region = new Region({
    name, code
  })
  await region.save();

  res.status(200).json({
    message: "Region added successfully"
  })
}

exports.addParkingSpot = async (req, res, next) => {
  const regionId = req.params.id;
  const { title, extra_info, facilities, coordonates } = req.body;

  const region = await Region.findById(regionId).populate('creator');
  if(!region) {
    const error = new Error('Region not found!')
    error.statusCode = 404;
    throw error;
  }

  try {
    const parking = new Parking({
      title, extra_info, facilities, coordonates
    })
    await parking.save();
    region.parkingItems.push(parking._id)
    await region.save();

    res.status(200).json({
      message: "parking created successfully"
    })
  } catch(err) {
    if(!err.statusCode) err.statusCode = 500;
    next(err)
  }
}