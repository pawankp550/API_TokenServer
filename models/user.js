const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//define user schema
const userSchema = new Schema(
    {
        email : {type: String, unique: true, lowercase: true},
        password: String
    }
)

//create a model class
const ModelClass = mongoose.model('user', userSchema)

//export the model
module.exports = ModelClass;