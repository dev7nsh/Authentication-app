import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    firstname: {
        type: String,
        required: true,
        trim: true
    }
}, { timestamps: true });

export const  User = mongoose.model("Userdata",userSchema)