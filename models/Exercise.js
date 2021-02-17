const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newExercise = new Schema({
    name: {
        type: String,
    },
    birthday: {
        type: Number,
    }
})

const Chicken = mongoose.model("wings", newExercise);

module.exports = Chicken;