const mongoose = require("mongoose");
const pageView = require("../models/pageView");

const trackVisit = async(req, res, next) => {
    const pageView = await pageView.create({ path: req.path, userAgent: req.get('User-Agent') })
    console.log(pageVisit)
    next();
}
module.exports = trackVisit;