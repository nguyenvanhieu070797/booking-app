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
    const department_name = req.body.department_name;
    const locate = req.body.locate;
    const image = req.body.image;
    const description = req.body.description;
    console.log(req.body);
    Department.create({
        department_name,
        locate,
        image,
        description
    }).then((department ) => {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({data: department, status: 200}, null, 3)).status(200);
    }).catch(err => {
        console.log(err);
    });
};

exports.postEditDepartment = (req, res, next) => {
    const departmentId = req.params.department_id;
    const department_name = req.body.department_name;
    const locate = req.body.locate;
    const image = req.body.image;
    const description = req.body.description
    Department.findByPk(departmentId)
        .then(department => {
            department.department_name = department_name;
            department.locate = locate;
            department.image = image;
            department.description = description;
            return department.save();
        })
        .then(result => {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({data: result, status: 200}, null, 3)).status(200);
        })
        .catch(err => console.log(err));
};

exports.postDeleteDepartment = (req, res, next) => {
    const departmentId = req.body.department_id;
    Department.findByPk(departmentId)
        .then(department => {
            return department.destroy();
        })
        .then(() => {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({status: 200}, null, 3)).status(200);
        })
        .catch(err => console.log(err));
};
