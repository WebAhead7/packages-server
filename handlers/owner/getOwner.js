const getOwner = (req, res, next) => {
  res.json(res.owner);
};

module.exports = getOwner;
