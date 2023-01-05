const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const movieSchema = new Schema( 
    {
        title: { 
            type: String,
            required: true,  
        },
        year: {
            type: Number,
            required: true,
        },
        id: {
            type: Number,
            required: true,
        },
        rating: {
            type: Number,
            required: true,
        },
        genre: {
            type: String,
            required: true,
        },
        poster: {
            type: String,
            required: true,
        },

    }
);
const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
        index:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    mobile:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
});

//Export the model
module.exports = mongoose.model('User', userSchema);
const movie=mongoose.model('Movie', movieSchema);
modalUnstyledClasses.expports=movie;