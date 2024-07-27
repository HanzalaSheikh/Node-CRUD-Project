const mongoose = require('mongoose');
mongoose.connect('mongodb://<URL>/<PROJECTNAME>');

const userSchema = mongoose.Schema({
    image: String,
    name: String,
    email: String
})

module.exports = mongoose.model("user", userSchema);
