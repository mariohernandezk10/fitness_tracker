const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path")
const db = require("./models")

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

// this code below should give us an error
// db.on("error", error => {
//     console.log("Database Error:", error);
// });


// db.Workout.create({body})
//   .then(dbLibrary => {
//     console.log(dbLibrary);
//   })
//   .catch(({message}) => {
//     console.log(message);
//   });


// let body = {
//   name: "sai",
//   birthday: 111185
// }
// db.Chicken.create(body).catch(err => console.log(err));
// this code below gives you the entire object which will contain the exercises
// app.get("/all", (req, res) => {

//   db.animals.find({}, (err, found) => {
//     if (err) {
//       console.log(err);
//     } else {
//       res.json(found);
//     }
//   });
// });





// to show all exercises 
// use db.Workout.find()

// To find a specific workout in the array
// use db.Workout.find({"exercises": {$in: ["Bench Press"]}})



// app.post("/submit", ({ body }, res) => {
//   db.Note.create(body)
//     .then(({ _id }) => db.User.findOneAndUpdate({}, { $push: { notes: _id } }, { new: true }))
//     .then(dbUser => {
//       res.json(dbUser);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });



app.get("/api/workouts", function (req, res) {
  console.log(req.body);
  db.Workout.find({}).then(function (data) {
    res.json(data)
  })
})


app.put("/api/workouts/:id", function (req, res) {
  db.Workout.findByIdAndUpdate(req.params.id, {
    exercises: req.body
  }).then(function (data) {
    res.json(data);
  })
});

app.post("/api/workouts", function (req, res) {
  db.Workout.create({}).then(function (data) {
    res.json(data);
  })
})

app.get("/api/workouts/range", function (req, res) {
  db.Workout.find({}).then(function (data) {
    res.json(data);
  })
})

// req.query.id ---> 2394572394283
// app.post("/api/workouts", function (req, res) {
//     req.query.id
// })
// we need this in the other file

app.post("/api/workouts", (req, res) => {
  console.log(req.body);

  // db.notes.insert(req.body, (error, data) => {
  //   if (error) {
  //     res.send(error);
  //   } else {
  //     res.send(data);
  //   }
  // });
});




// app.put("/api/workouts/:id", function (req, res) {
//     req.params.id 
// });
// **** db.places.update({"_id": ObjectId("602b26080e5d651914577aa1")}, {$push: {"majorcities": "Austin"}}) ******
// db.[COLLECTION_NAME].update()


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



// for deleting
// use db.places.remove({"country": "Morocco"})




// msybe need this to find someone who specifically "benches"
// db.students.find(
//     {$or:[
//         {"hobbies":{"$in":["Reading"]}},
//         {"os":{"$in":["mac"]}}
//     ]}
// )