const getClients = (req, res, next) => {
  res.json(res.clients);
};

module.exports = getClients;
