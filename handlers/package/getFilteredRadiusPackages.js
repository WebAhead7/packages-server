const Package = require("../../db/package");

const getFilteredRadiusPackages = (req, res, next) => {
  const agent = res.agent;
  const { latitude, longitude } = req.body;

  const radius = 15;

  const packages = res.packages.filter((package) => {
    if (
      calcDistance(
        latitude,
        longitude,
        package.address.address.latitude,
        package.address.address.longitude
      ) <= radius
    )
      return package;
  });

  res.packages = packages;
  next();
};

function calcDistance(lat1, lon1, lat2, lon2) {
  var R = 6371; // km
  var dLat = toRadian(lat2 - lat1);
  var dLon = toRadian(lon2 - lon1);
  var lat1 = toRadian(lat1);
  var lat2 = toRadian(lat2);

  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;
  return d;
}

function toRadian(Value) {
  return (Value * Math.PI) / 180;
}

module.exports = getFilteredRadiusPackages;
