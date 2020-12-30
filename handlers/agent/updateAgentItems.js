const { Agent } = require("../../db/db");

const updateAgentItems = async (req, res, next) => {
    const packageId = req.params.packageId;
    const agentId = req.params.businessId;

    try {
        await Agent.findOneAndUpdate(
            { _id: `${agentId}` },
            {
                $push: { "items": `${packageId}` }
            }
        );

        return res.status(201).json({ package_message: "Agent items updated successfuly" });
    } catch (err) {
        res.status(400).json({ package_message: "Agent items wasn't updated" });
    }
};

module.exports = updateAgentItems;
