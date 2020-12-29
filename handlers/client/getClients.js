const getPackages = (req, res, next) => {
    res.json(res.packages);
};

module.exports = getPackages;
