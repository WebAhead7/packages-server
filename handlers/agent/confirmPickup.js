require("dotenv").config();

const confirmPickup = (req, res, next) => {
  const confirmation = res.wantedPackage.confirmation;
  const isValid = req.body.confirmation;

  if (isValid !== confirmation) {
    const error = new Error("Wrong confirmation code!");
    error.status = 403;
    return next(error);
  }

  return next();
};

module.exports = confirmPickup;
