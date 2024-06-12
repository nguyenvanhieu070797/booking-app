const User = require('../../models/user');
const Department = require('../../models/department');

/**
 *
 * @param req
 * @param res
 */
exports.getUsers = (req, res) => {
    User.findAll({
        include: Department
    }).then(users => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).end(JSON.stringify({data: users}, null, 3)).status(200);
    }).catch(err => {
        console.log({err});
    });
};

/**
 *
 * @param req
 * @param res
 */
exports.getUser = (req, res) => {
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

/**
 *
 * @param req
 * @param res
 */
exports.postAddUser = (req, res) => {
    const imageUrl = req.file.path;
    const username = req.body.user_name || "";
    const email = req.body.email  || "";
    const password = req.body.password  || "";
    const description = req.body.description || "";

    console.log({
        username,
        email,
        password,
        description,
        imageUrl
    });

    res.end(JSON.stringify({
        status: 400,
    }, null, 3)).status(200);
    // const image = req.body.image;
    // User.create({
    //     user_name: username,
    //     email: email,
    //     password: password,
    //     description: description,
    //     // image: image
    // }).then((user) => {
    //     res.setHeader('Content-Type', 'application/json');
    //     res.end(JSON.stringify({
    //         data: user,
    //         status: 200,
    //     }, null, 3)).status(200);
    // }).catch(err => {
    //     console.log(err);
    // });
};

/**
 *
 * @param req
 * @param res
 */
exports.postEditUser = (req, res) => {
    const userId = req.params.user_id;
    const username = req.body.user_name;
    const email = req.body.email;
    const password = req.body.password;
    const description = req.body.description;
    const image = req.body.image;
    User.findByPk(userId)
        .then(user => {
            user.user_name = username;
            user.email = email;
            user.password = password;
            user.description = description;
            user.image = image;
            return user.save();
        })
        .then(result => {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({data: result, status: 200}, null, 3)).status(200);
        })
        .catch(err => console.log(err));
};

/**
 *
 * @param req
 * @param res
 */
exports.postDeleteUser = (req, res) => {
    const userId = req.body.user_id;
    User.findByPk(userId)
        .then(user => {
            return user.destroy();
        })
        .then(() => {
            console.log('DESTROYED PRODUCT');
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({status: 200}, null, 3)).status(200);
        })
        .catch(err => console.log(err));
};
