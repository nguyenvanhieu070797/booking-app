const User = require('../../models/user');
const Department = require('../../models/department');

exports.getUsers = (req, res, next) => {
    User.findAll({
        include: Department
    }).then(users => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).end(JSON.stringify({data: users}, null, 3)).status(200);
    }).catch(err => {
        console.log({err});
    });
};

exports.getUser = (req, res, next) => {
    const userId = req.params.user_id;
    User.findByPk(userId, {
        include: Department
    }).then(users => {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({data: users}, null, 3)).status(200);
    }).catch(err => {
        console.log({err});
    });
};

exports.postAddUser = (req, res, next) => {
    const username = req.body.user_name;
    const email = req.body.email;
    const password = req.body.password;
    const description = req.body.description
    User.create({
        user_name: username,
        email: email,
        password: password,
        description: description
    }).then((user ) => {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({data: user}, null, 3)).status(200);
    }).catch(err => {
        console.log(err);
    });
};

exports.postEditUser = (req, res, next) => {
    const userId = req.params.user_id;
    const username = req.body.user_name;
    const email = req.body.email;
    const password = req.body.password;
    const description = req.body.description;
    User.findByPk(userId)
        .then(user => {
            user.user_name = username;
            user.email = email;
            user.password = password;
            user.description = description;
            return user.save();
        })
        .then(result => {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({data: result}, null, 3)).status(200);
        })
        .catch(err => console.log(err));
};

exports.postDeleteUser = (req, res, next) => {
    const userId = req.body.user_id;
    console.log({userId});
    User.findByPk(userId)
        .then(user => {
            return user.destroy();
        })
        .then(result => {
            console.log('DESTROYED PRODUCT');
            res.setHeader('Content-Type', 'application/json');
            res.end().status(200);
        })
        .catch(err => console.log(err));
};
