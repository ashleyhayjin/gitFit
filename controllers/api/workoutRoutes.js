const router = require('express').Router();
const Workout = require("../../models/Workout");

router.get("/api/workouts", (req,res) => {
    Workout.find({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    })
})

router.get("/api/workouts/range", (req, res) => {
    Workout.find({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    })
})

router.post("/api/workouts", ({body},res) => {
    console.log("body", body);
    Workout.create({body}) 
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        })
});

router.put("/api/workouts/:id", (req,res) => {
   Workout.findByIdAndUpdate(
       req.params.id,
       {$push: {exercises: req.body}},
       {new: true}
   )
   .then(workout => res.json(workout))
   .catch(err => res.json(err));
})

module.exports = router;