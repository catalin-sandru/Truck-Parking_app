const Region = require('../model/regionModel');

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

  const region = await Region.findById(regionId);
  // const parkingItem = await
  console.log()
  res.json({
    regionId
  })
}