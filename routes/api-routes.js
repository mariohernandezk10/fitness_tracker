const router = require("express").Router();
const db = require("../models");



router.get("/api/workouts", function (req, res) {
    db.Workout.find({}).then(function (data) {
        res.json(data)
    })
});


router.put("/api/workouts/:id", function (req, res) {
    db.Workout.findByIdAndUpdate(req.params.id, {
        exercises: req.body
    }).then(function (data) {
        res.json(data);
    })
});

router.post("/api/workouts", function (req, res) {
    console.log(req.body)
    let body = req.body
    db.Workout.create({
        body
    }).then(function (data) {
        res.json(data);
    })
})

router.get("/api/workouts/range", function (req, res) {
    db.Workout.find({}).then(function (data) {
        res.json(data);
    })
})

module.exports = router;
