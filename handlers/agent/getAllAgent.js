const { Agent } = require("../../db/db");

const getAllAgent = async (req, res, next) => {
    let agents;

    try {
        agents = await Agent.find().select({
            "first_name": 1,
            "last_name": 1,
            "email": 1,
            "items": 1,
            "vehicle_type": 1,
            "vehicle_no": 1,
            "id_num": 1,
            "licenseId": 1,

            _id: 1,
        });

        if (agents == null) {
            const error = new Error("Cannot find agents");
            error.status = 404;
            return next(error);
        }
    } catch (err) {
        return next(err);
    }
    console.log(agents);

    res.agent = agents;
    next();
};

module.exports = getAllAgent;
