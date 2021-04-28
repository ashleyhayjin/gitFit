const {Schema, model} = require('mongoose');

const workoutSchema = new Schema (
    {
        day: {
            type: Date,
            default: Date.now
        },
        exercises: [
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
                },
                distance:{
                    type: Number,           
                },
                weight:{
                    type: Number,
             
                },
                reps:{
                    type: Number,
               
                },
                sets:{
                    type: Number,
                    
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