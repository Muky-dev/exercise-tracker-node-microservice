const User = require('../models/User.js');

export async function getIndex (req, res) {
    res.sendFile(__dirname + '/views/index.html');
}

export async function postUser(req, res) {

}