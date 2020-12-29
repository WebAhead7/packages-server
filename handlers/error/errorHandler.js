const errorHandler = (error, req, res, next) => {
  if (!error.status) {
    error.message = "Internal server error";
  }

  res.status(error.status || 500).json({ message: error.message });
  return;
};

module.exports = errorHandler;
