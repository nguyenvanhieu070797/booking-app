const User = require('../../models/user');
const Department = require('../../models/department');

const bcrypt = require('bcryptjs');
const uuid = require('uuid');
const {validationResult} = require('express-validator');

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
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const error = new Error('Validation failed.');
        error.data = errors.array();
        res.end(JSON.stringify({
            message: error.data?.[0]?.["msg"] || "",
        }, null, 3)).status(302);
    } else {
        const imageUrl = req.file.path;
        const username = req.body.user_name || "";
        const email = req.body.email  || "";
        const password = req.body.password  || "";
        const description = req.body.description || "";
        const role = req.body.role || "";
        bcrypt
            .hash(password, parseInt(process.env?.BCRYPT_LENGTH || 12))
            .then(hashedPw => {
                User.create({
                    user_id: uuid.v4(),
                    user_name: username,
                    email: email,
                    password: hashedPw,
                    description: description,
                    image: imageUrl,
                    role: role,
                }).then((user) => {
                    res.end(JSON.stringify({
                        data: user,
                    }, null, 3)).status(200);
                }).catch(err => {
                    console.log(err);
                });
            });
    }
};

/**
 *
 * @param req
 * @param res
 */
exports.postEditUser = (req, res) => {
    const userId = req?.params?.user_id || "";
    const userName = req?.body?.user_name || "";
    const email = req?.body?.email || "";
    const password = req?.body?.password || "";
    const description = req?.body?.description || "";
    const imageUrl = req?.file?.path || "";

    bcrypt
        .hash(password, parseInt(process.env?.BCRYPT_LENGTH || 12))
        .then(hashedPw => {
            User.findByPk(userId)
                .then(user => {
                    if (userName.length > 0) {
                        user.user_name = userName;
                    }
                    if (email.length > 0) {
                        user.email = email;
                    }
                    if (password.length > 0) {
                        user.password = hashedPw;
                    }
                    if (description.length > 0) {
                        user.description = description;
                    }
                    if(imageUrl) {
                        user.image = imageUrl;
                    }
                    return user.save();
                })
                .then(result => {
                    res.end(JSON.stringify({data: result, status: 200}, null, 3)).status(200);
                })
                .catch(err => console.log(err));
        });
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
