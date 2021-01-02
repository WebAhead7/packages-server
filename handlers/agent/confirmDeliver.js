require("dotenv").config();

const confirmDeliver = (req, res, next) => {
  const confirmation = res.wantedPackage.clientConfirmation;
  const isValid = req.body.confirmation;

  if (isValid !== confirmation) {
    const error = new Error("Wrong confirmation code!");
    error.status = 403;
    return next(error);
  }

  return next();
};

module.exports = confirmDeliver;
