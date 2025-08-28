import mongoose, { Types } from "mongoose";

const userModel = new mongoose.Schema({
    name: {
        type: String,
        require: [true, "Name is required"]
    },
    email: {
        type: String,
        require: [true, "Email is required"],
        unique: true
    },
    age: {
        type: String,
        default: 18
    }
}, { timestamps: true });

export default mongoose.model("User", userModel);