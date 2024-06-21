const User = require('../../models/user');
const Department = require('../../models/department');

const {validationResult} = require('express-validator');
const uuid = require('uuid');

exports.getDepartments = (req, res) => {
    Department.findAll({
        include: User
    }).then(departments => {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({data: departments}, null, 3)).status(200);
    }).catch(err => {
        console.log({err});
    });
};

exports.getDepartment = (req, res) => {
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

exports.postAddDepartment = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const error = new Error('Validation failed.');
        error.data = errors.array();
        res.end(JSON.stringify({
            message: error.data?.[0]?.["msg"] || "",
            status: 302,
        }, null, 3)).status(302);
    } else {
        const department_name = req?.body?.department_name || "";
        const locate = req?.body?.locate || "";
        const description = req?.body?.description || "";
        const imageUrl = req?.file?.path || "";
        Department.create({
            department_id: uuid.v4(),
            department_name,
            locate,
            image: imageUrl,
            description
        }).then((department) => {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({data: department, status: 200}, null, 3)).status(200);
        }).catch(err => {
            console.log(err);
        });
    }
};

exports.postEditDepartment = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const error = new Error('Validation failed.');
        error.data = errors.array();
        res.end(JSON.stringify({
            message: error.data?.[0]?.["msg"] || "",
            status: 302,
        }, null, 3)).status(302);
    } else {
        const departmentId = req?.params?.department_id || "";
        const department_name = req?.body?.department_name || "";
        const locate = req?.body?.locate || "";
        const description = req?.body?.description || "";
        const imageUrl = req?.file?.path || "";
        Department.findByPk(departmentId)
            .then(department => {
                department.department_name = department_name;
                department.locate = locate;
                department.image = imageUrl;
                department.description = description;
                if (department_name.length > 0) {
                    department.department_name = department_name;
                }
                if (locate.length > 0) {
                    department.locate = locate;
                }
                if (imageUrl.length > 0) {
                    department.image = imageUrl;
                }
                if (description.length > 0) {
                    department.description = description;
                }
                return department.save();
            })
            .then(result => {
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({data: result, status: 200}, null, 3)).status(200);
            })
            .catch(err => console.log(err));

    }
};

exports.postDeleteDepartment = (req, res) => {
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
