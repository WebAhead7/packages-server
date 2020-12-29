const badRequest = (req, res, next) => {
  console.log("bad request");
  const error = new Error("Bad request");
  error.status = 404;
  next(error);
};

module.exports = badRequest;
