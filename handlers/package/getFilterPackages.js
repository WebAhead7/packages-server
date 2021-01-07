const getFilteredPackages = (req, res, next) => {
  return res.json(res.packages);
};

module.exports = getFilteredPackages;
