const getOneClient = (req, res, next) => {
  const clientId = req.params.clientId;

  const client = res.clients.find((client) => client["_id"] == clientId);

  res.json(client);
};

module.exports = getOneClient;
