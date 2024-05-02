import mongoose from "mongoose";
import validator from "validator";

const messageScheam = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: [3, "Name must be at least 3 characters"],
        maxLength: [30, "Name must be at most 30 characters"]
    },
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, "Please enter a valid email"]
    },
    phone: {
        type: String,
        required: true,
        minLength: [11, "Phone number must be at least 11 characters"],
        maxLength: [11, "Phone number must be at most 11 characters"]
    },
    message: {
        type: String,
        required: true
    }
});

export  const Message= mongoose.model("Volunteer",messageScheam);
