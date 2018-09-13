/**
 * Created a mongoose model that can be sued to create, read, 
 * update and delete documents in the database. 
 */

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

/**
 * A blue print of the object in our mongoDB.
 */
const videoSchmea = new Schema({
    title: String,
    url: String,
    description: String
});

/**
 * Create a model from the Schema.
 * 'video' is the name of the model.
 * 'videos' is name of the collection in the mongoDB.
 */
module.exports = mongoose.model('video', videoSchmea, 'videos')