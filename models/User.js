const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: String,
        trim: true,
        required: "String is Required"
    },

    exercises: [{

        type: {
            type: String,
            trim: true,
            required: "String is Required"
        },
        name: {
            type: String,
            trim: true,
            required: "String is Required"
        },
        duration: {
            type: String,
            trim: true,
            required: "String is Required"
        },
        weight: {
            type: String,
            trim: true,
            required: "String is Required"
        },
        reps: {
            type: String,
            trim: true,
            required: "String is Required"
        },
        sets: {
            type: String,
            trim: true,
            required: "String is Required"
        },
        distance: {
            type: String,
            trim: true,
            required: "String is Required"
        }
    }]
});

const User = mongoose.model("User", WorkoutSchema);

module.exports = User;