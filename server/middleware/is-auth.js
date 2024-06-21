const jwt = require('jsonwebtoken');
const User = require("../models/user");

module.exports = (req, res, next) => {
    const authHeader = req.get('Authorization');
    try {
        if (!authHeader) {
            const error = new Error('Not authenticated.');
            error.statusCode = 401;
            error.messages = 'Not authenticated.';
            throw error;
        }
        const token = authHeader.split(' ')[1];
        let decodedToken;
        try {
            decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        } catch (err) {
            const error = new Error('Not authenticated.');
            error.statusCode = 500;
            error.messages = 'Authenticated expired!';
            throw error;
        }
        if (!decodedToken) {
            const error = new Error('Not authenticated.');
            error.messages = 'Not authenticated.';
            error.statusCode = 401;
            throw error;
        }
        User.findByPk(decodedToken["user_id"]).then(user => {
            if (!user) {
                const error = new Error('User not found.');
                error.messages = 'Authenticated no access!';
                error.statusCode = 404;
                throw error;
            }
            req.isAdmin = user["role"] === "admin";
            req.userId = user["user_id"];
            next();
        }).catch(err => {
            res.end(JSON.stringify({
                messages: err?.["messages"] || "",
            }, null, 3)).status(err.statusCode);
        });
    } catch (err) {
        res.end(JSON.stringify({
            messages: err?.["messages"] || "",
        }, null, 3)).status(err.statusCode);
    }
};
