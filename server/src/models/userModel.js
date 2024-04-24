const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const userSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name of the user is required."],
        minLength: [4, "Name should contain 4 or more letters."],
    },
    email: {
        type: String,
        required: [true, "Email of the user is required"],
        unique: [true, "Email must be unique"],
    },
    phone: {
        type: Number,
        required: [true, "Phone number is required."],
        unique: [true, "Phone number must be unique"],
    }
}, {
    timestamps: true,
    versionKey: false,
});

module.exports = mongoose.model("User", userSchema);