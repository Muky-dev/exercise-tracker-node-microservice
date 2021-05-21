import User from '../models/User.js';
import Exercise from '../models/Exercise.js';

export async function postUser(req, res) {
    const username = req.body.username;

    try {
        const newUser = await new User({username: username}).save();
        res.json({ username: username , _id: newUser._id});
    } catch (error) {
        if (error.code == 11000) {
            res.send("Username already taken");
        } else {
            res.json(error);
        }
    }
}

export async function postExercise(req, res) {
    const id = req.params._id;
    const description = req.body.description;
    const duration = req.body.duration;
    const date = req.body.date;

    const formatedDate = await formatDate(date);

    try {
        const findUser = await User.findOne({_id: id});
        const newExercise = await new Exercise({
            user: findUser._id,
            date: formatedDate,
            duration: duration,
            description: description
        }).save();
        res.json(newExercise);
    } catch (error) {
        res.json(error);
    }
}

// Validate Date function
async function formatDate(date) {
    const hifenSpace = date.split('-');
    const blankSpace = date.split(' ');
    console.log(hifenSpace, blankSpace);
    if (hifenSpace.length > 1) {
        try {
            const newDate = new Date(hifenSpace[0], hifenSpace[1]-1, hifenSpace[2]).toDateString();
            return newDate;
        } catch (error) {
            return error
        }
    } else if (blankSpace.length > 1) {
        try {
            const newDate = new Date(blankSpace[0], blankSpace[1]-1, blankSpace[2]).toDateString();
            return newDate;
        } catch (error) {
            return error
        }
    } else {
        return new Date(Date.now()).toDateString();
    }
    
}

export async function getExercises(req, res) {
    const id = req.params._id;
    const fromQuery = req.query.from;
    const toQuery = req.query.to;
    const limit = req.query.limit;
}