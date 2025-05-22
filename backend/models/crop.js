import mongoose from "mongoose";

const cropSchema = new mongoose.Schema({
    plantname: {
        type: String,
        required: true,
    },
    dateAdded:{
        type: Date,
        default: Date.now,
        expires: 60*60*24*15,
    },
    fertilizername: {
        type: String,
        required:true,
    },
    fertilizertype: {
        type: String,
        required:true,
    },
    fertilizermethod: {
        type: String,
        required: true,
    },
    planttype: {
        type: String,
        required: true,
    },
    fertilizerquantity: {
        type: Number,
        required: true,

    }
    
});

export default mongoose.model("Crop", cropSchema);