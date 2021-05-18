import User from '../models/User.js';

export async function getIndex (req, res) {
    res.sendFile(__dirname + '/views/index.html');
}
export async function postUser(req, res) {
    const username = req.body.username;

    try {
        const newUser = await new User({username: username}).save();
        res.json(newUser);
    } catch (error) {
        res.json(error);
    }
}