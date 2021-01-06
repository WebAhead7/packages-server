const Package = require("../../db/package");

const getFilteredRadiusPackages = (req, res, next) => {
    console.log("ww")
    const agent = res.agent;
    const {
        myLocation,
        longitude
    } = req.body
    console.log(req.body)
    // const agent_location = req.body.myLocation;
    // console.log(agent_location)
    // const agent_longitude = agent_location.longitude;

    // const agent_latitude = agent_location.latitude;
    const radius = 15
    console.log(radius)
    // const packages = res.packages;
    // console.log("")
    packages.filter(package => {
        const package_location = package.address.address;
        const package_longitude = package_location.longitude;
        const package_latitude = package_location.latitude;
        console.log(packages)
        if (calcDistance(agent_latitude, agent_longitude, package_latitude, package_longitude) <= radius)
            return package
    })
    console.log(packages)

    function calcDistance(lat1, lon1, lat2, lon2) {
        var R = 6371; // km
        var dLat = toRadian(lat2 - lat1);
        var dLon = toRadian(lon2 - lon1);
        var lat1 = toRadian(lat1);
        var lat2 = toRadian(lat2);

        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c;
        return d;
    }

    function toRadian(Value) {
        return Value * Math.PI / 180;
    }

    console.log("skds,dlsd,sdl")

    res.packages = packages;
    next();
};

module.exports = getFilteredRadiusPackages;
