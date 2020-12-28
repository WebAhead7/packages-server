const returnBusiness = (req, res, next) => {
  res.json(res.business);
};

module.exports = returnBusiness;
