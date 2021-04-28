const {Schema, model} = require('mongoose');

const workoutSchema = new Schema (
    {
        day: {
            type: Date,
            default: Date.now
        },
        exercises: 
        [
            {
                type:{
                    type: String,
                    required: true,
                }, 
                name:{ 
                    type: String,
                    required: true,
                },
                duration:{
                    type: Number,
                    required: true,
                },
                distance:{
                    type: Number,
                    required: false,
                },
                weight:{
                    type: Number,
                    required: false,
                },
                reps:{
                    type: Number,
                    required: false,
                },
                sets:{
                    type: Number,
                    required: false,
                },
            }

        ]
    }
);

// workoutSchema.methods.makeDuration = function () {
//     this.duration = 
// }


const Workout = model("Workout", workoutSchema);

module.exports =  Workout;