const getOnePackage = (req, res, next) => {

  console.log("sdsdsd");
  // const package = res.packages.find((package) => package["_id"] == packageId);

  res.json(res.packages);
};

module.exports = getOnePackage;
