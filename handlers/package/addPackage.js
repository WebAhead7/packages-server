const { Package } = require("../../db/db");

const addPackage = async (req, res, next) => {
    const package = new Package({
        name: req.body.name,
        id: req.body.storeId,
        mid: req.body.category,
        weight: req.body.items,
        delivery_price: req.body.clients,
        quantity: req.body.phone,
        status: req.body.phone,
        track_number: req.body.fax,
        businessId: req.body.email,
        clientId: req.body.about,
        agentId: req.body.address,
    });

    try {
        const newPackage = await package.save();
        res.status(201).json(newPackage);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

module.exports = addPackage;
