const { Business } = require("../../db/db");

const deletePackage = async (req, res, next) => {
    console.log(req.params);

    try {
        await Business.findByIdAndUpdate({ "_id": `${req.params.businessId}` },
            { $pull: { "items": { "_id": `${req.params.packageId}` } } });
        return res.status(200).json({ message: "Package was deleted succesfully!" })
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};

module.exports = deletePackage;
