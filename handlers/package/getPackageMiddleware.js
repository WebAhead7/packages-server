const { Package } = require("../../db/db");

const getPackage = async (req, res, next) => {
    let package;

    try {
        package = await Package.findById(req.params.id);
        if (package == null) {
            return res.status(404).json({ message: "Cannot find package" });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.package = package;
    next();
};

module.exports = getPackage;
