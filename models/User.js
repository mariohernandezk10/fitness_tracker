const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        trim: true,
        default : () => new Date()
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
            required: "Number is Required"
        },
        duration: {
            type: Number,
            trim: true,
            required: "Number is Required"
        },
        weight: {
            type: Number,
            trim: true,
            required: "Number is Required"
        },
        reps: {
            type: Number,
            trim: true,
            required: "Number is Required"
        },
        sets: {
            type: Number,
            trim: true,
            required: "Number is Required"
        },
        distance: {
            type: Number,
            trim: true,
            required: "Number is Required"
        }
    }]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;