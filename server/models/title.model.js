let mongoose = require('mongoose');
let titleSchema = new mongoose.Schema({});

const Title = mongoose.model('Title', titleSchema, "Titles");

module.exports = Title;