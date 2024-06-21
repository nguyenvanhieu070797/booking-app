const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/user');

exports.login = (req, res) => {
    const userName = req.body.user_name;
    const password = req.body.password;
    let loadedUser;
    User.findOne({
        where: {user_name: userName}
    }).then(user => {
        if (!user) {
            const error = new Error('Account could not be found.');
            error.statusCode = 401;
            error.messages = 'Account could not be found.';
            throw error;
        }
        loadedUser = user;
        return bcrypt.compare(password, user.password);
    }).then(isEqual => {
        if (!isEqual) {
            const error = new Error('Wrong password!');
            error.statusCode = 401;
            error.messages = 'Wrong password!';
            throw error;
        }

        const token = jwt.sign(
            {
                user_name: loadedUser["user_name"],
                user_id: loadedUser["user_id"].toString()
            },
            process.env.ACCESS_TOKEN_SECRET,
            {
                expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN
            }
        );

        res.status(200).json({
            token, userId: loadedUser["user_id"].toString()
        });
    }).catch(err => {
        return res.end(JSON.stringify({
            message: err.messages,
        }, null, 3)).status(err.statusCode);
    });
};

exports.getUserStatus = (req, res, next) => {
    console.log(req["user_id"]);
    User.findByPk(req["user_id"])
        .then(user => {
            if (!user) {
                const error = new Error('User not found.');
                error.statusCode = 404;
                error.messages = 'User not found.';
                throw error;
            }
            res.status(200).json({
                data: user,
            });
        }).catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            res.end(JSON.stringify({
                message: err.messages,
            }, null, 3)).status(err.statusCode);
        });
};
