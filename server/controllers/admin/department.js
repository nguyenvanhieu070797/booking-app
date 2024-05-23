const User = require('../../models/user');
const Department = require('../../models/department');

exports.getDepartments = (req, res, next) => {
    Department.findAll({
        include: User
    }).then(departments => {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({data: departments}, null, 3)).status(200);
    }).catch(err => {
        console.log({err});
    });
};

exports.getDepartment = (req, res, next) => {
    const departmentId = req.params.department_id;
    Department.findByPk(departmentId, {
        include: User
    }).then(department => {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({data: department}, null, 3)).status(200);
    }).catch(err => {
        console.log({err});
    });
};

exports.postAddDepartment = (req, res, next) => {
    const title = req.body.title;
    const locate = req.body.locate;
    const image = req.body.image;
    const description = req.body.description
    Department.create({
        title,
        locate,
        image,
        description
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
