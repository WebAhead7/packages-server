const { Business } = require("../../db/db");

const getPackage = async (req, res, next) => {
    let packages;

    try {
        packages = await Business.findById(req.params.id);
        if (packages == null) {
            return res.status(404).json({ message: "No Packages Yet!" });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.packages = packages.items;
    next();
};

module.exports = getPackage;
