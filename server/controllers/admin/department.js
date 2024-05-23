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
    }).then((department ) => {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({data: department}, null, 3)).status(200);
    }).catch(err => {
        console.log(err);
    });
};

exports.postEditDepartment = (req, res, next) => {
    const departmentId = req.params.department_id;
    const title = req.body.title;
    const locate = req.body.locate;
    const image = req.body.image;
    const description = req.body.description
    Department.findByPk(departmentId)
        .then(department => {
            department.title = title;
            department.locate = locate;
            department.image = image;
            department.description = description;
            return department.save();
        })
        .then(result => {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({data: result}, null, 3)).status(200);
        })
        .catch(err => console.log(err));
};

exports.postDeleteDepartment = (req, res, next) => {
    const departmentId = req.body.department_id;
    Department.findByPk(departmentId)
        .then(department => {
            return department.destroy();
        })
        .then(result => {
            res.setHeader('Content-Type', 'application/json');
            res.end().status(200);
        })
        .catch(err => console.log(err));
};
