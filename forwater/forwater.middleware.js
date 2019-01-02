let {
    initializeForwaterData
} = require('./forwater.init.js')

let forwaterData = {};

let addForwaterData = (req, res, next) => {
    req.forwaterData = forwaterData;
    next();
}

initalizeMiddleWare = () => {
    initializeForwaterData('/opt/opencdn/appServer/plugins/forwater/profile.json').then(value => {
        forwaterData = value;
    });
}

initalizeMiddleWare();

module.exports = {
    addForwaterData
}
