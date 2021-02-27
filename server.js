const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path")
const db = require("./models");


const PORT = process.env.PORT || 3000;

const app = express();
app.use(morgan('dev'));
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

app.use(require("./routes/api-routes"));
// this code below should give us an error
// db.on("error", error => {
//     console.log("Database Error:", error);
// });

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "./public/index.html"))
})

app.get("/stats", function (req, res) {
  res.sendFile(path.join(__dirname, "./public/stats.html"))
})

app.get("/exercise", function (req, res) {
  res.sendFile(path.join(__dirname, "./public/exercise.html"))
})


// let body = {
//   name: "sai",
//   birthday: 111185
// }

app.get("/api/workouts", function (req, res) {
  db.Workout.aggregate([{
      $addFields: {
        totalDuration: {
          $sum: "duration"
        }
      }
    }])
    console.log(totalDuration);
})

// db.Chicken.create(body).catch(err => console.log(err));


// To find a specific workout in the array
// use db.Workout.find({"exercises": {$in: ["Bench Press"]}})



// app.post("/api/workouts", ({ body }, res) => {
//   db.Workout.create(body)
//     .then(({ _id }) => db.Workout.findOneAndUpdate({}, { $push: { workouts: _id } }, { new: true }))
//     .then(function (data) {
//       res.json(data);
//     })
// });

// req.query.id ---> 2394572394283
// app.post("/api/workouts", function (req, res) {
//     req.query.id
// })
// we need this in the other file



// app.put("/api/workouts/:id", function (req, res) {
//     req.params.id 
// });
// **** db.places.update({"_id": ObjectId("602b26080e5d651914577aa1")}, {$push: {"majorcities": "Austin"}}) ******
// db.[COLLECTION_NAME].update()


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});



// for deleting
// use db.places.remove({"country": "Morocco"})


// msybe need this to find someone who specifically "benches"
// db.students.find(
//     {$or:[
//         {"hobbies":{"$in":["Reading"]}},
//         {"os":{"$in":["mac"]}}
//     ]}
// )