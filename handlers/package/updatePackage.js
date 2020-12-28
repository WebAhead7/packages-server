const { Package } = require("../../db/db");

const updatePackage = async (req, res, next) => {
    let package;

    try {
        const id = req.params.id;
        let newPackage = req.body;
        package = await Package.findByIdAndUpdate(id,
            { $set: newPackage }, { new: true },
            function (err, result) {
                if (err) {
                    console.log(err);
                }
                console.log("RESULT: " + result);
                res.send('Done')
            });
        console.log("RESULT: " + result);
        res.send('Done')
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};

module.exports = updatePackage;
