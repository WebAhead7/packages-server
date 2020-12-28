const getPackage = (req, res, next) => {
    res.json(res.package);
};

module.exports = getPackage;
