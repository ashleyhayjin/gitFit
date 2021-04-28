const router = require('express').Router();
const Workout = require("../../models/Workout");

router.get("/api/workouts", async (req,res) => {
    const workoutData = await Workout.find({}).sort({day: -1}).limit(7);
    res.json(workoutData);
})

router.post("/api/workouts", (req,res) => {
    console.log("body", req.body);
    Workout.create(req.body) 
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