const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        trim: true,
        default: () => new Date()
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
}, {
    toJSON: {
        // include any virtual properties when data is requested
        virtuals: true
    }
});

// adds a dynamically-created property to schema
WorkoutSchema.virtual("totalDuration").get(function () {
    // "reduce" array of exercises down to just the sum of their durations
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0);
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;