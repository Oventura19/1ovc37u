const mongoose = require("mongoose");

const pageViewSchema = new mongoose.Schema({
    path: { type: String },
    date: { type: Date, default: Date.now },
    userAgent: { type: String }
}, { timestamps: true });

module.exports = mongoose.model("pageView", pageViewSchema);