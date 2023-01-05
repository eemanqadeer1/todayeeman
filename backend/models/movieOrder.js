const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const movieOrder = new Schema( //schema ka naam movie rakha =movieSchema
    {


        movie: {

            type: Schema.Types.ObjectId,   // not string here becz we take for all objects
            ref: 'Movie' //konse schema ko hold karna (model konsa =Movie)


        },
        orderStatus: {
            type: String,
            required: true,
        },
        orderId: {
            type: Number,
            required: true,
        },
        orderDate: {
            type: Date,
            required: true,
        },
        //for sub-coloums
    },
    {
        timestamps: true,   //date,month,year,seconds yah record/col kab add huwa tha
    }
);
const MovieOrder=mongoose.model('MovieOrder', movieOrder);
modalUnstyledClasses.expports=MovieOrder;