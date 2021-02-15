const express = require("express");
const mongoose = require("mongoose");
const path = require("path")
const db = require("./models/User")

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/User", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// db.create({ WorkoutSchema })
//   .then(dbUser => {
//     console.log(dbUser);
//   })
//   .catch(({ message }) => {
//     console.log(message);
//   });


// app.get("/api/workouts", function (req, res) {
// })


app.post("/api/workouts", function (req, res) {
    req.query.id
})
// we need this in the other file



// req.query.id ---> 2394572394283

// app.put("/api/workouts/:id", function (req, res) {
//     req.params.id 
// })


// routes
// app.use(require("./routes/api.js"));

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/index.html"))
})

app.get("/stats", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/stats.html"))
})

app.get("/exercise", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/exercise.html"))
})


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
