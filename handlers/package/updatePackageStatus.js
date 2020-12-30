const { Business } = require("../../db/db");

const updatePackageStatus = async (req, res, next) => {
    const packageId = req.params.packageId;
    const agentId = req.agent.agent._id;

    try {
        await Business.findOneAndUpdate(
            { "items._id": `${packageId}` },
            {
                $set: {
                    "items.$.status": "true",
                    "items.$.agentId": `${agentId}`
                },
            }
        );
        req.package_message = "Package status updated successfuly";
        return next();
    } catch (err) {
        return res.status(400).json({ package_message: "Package status wasn't updated" });
    }
};

module.exports = updatePackageStatus;
