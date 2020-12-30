const { Business } = require("../../db/db");

const updatePackageStatus = async (req, res, next) => {
    const packageId = req.params.packageId;
    const businessId = req.params.businessId;
    const agentId = req.agent._id;

    try {
        await Business.findOneAndUpdate(
            { _id: `${businessId}`, "items._id": `${packageId}` },
            {
                $set: {
                    "items.$.status": true,
                    "items.$.agentId": `${agentId}`
                },
            }
        );

        res.status(201).json({ package_message: "Package status updated successfuly", pas });
        return next();
    } catch (err) {
        return res.status(400).json({ package_message: "Package status wasn't updated" });
    }
};

module.exports = updatePackageStatus;
