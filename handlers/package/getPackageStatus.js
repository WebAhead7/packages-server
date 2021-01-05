const Package = require("../../db/package");

const getPackageStatus = async (req, res, next) => {
    const package = res.wantedPackage;
    return res.status(200).json({ status: package.status });
};

module.exports = getPackageStatus;
