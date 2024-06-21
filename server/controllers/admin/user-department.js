const UserDepartment = require('../../models/user-department');
const uuid = require('uuid');

exports.getUserDepartment = (req, res) => {
    let where = {};
    const userId = req.body.user_id ?? "";
    const departmentId = req.body.department_id ?? "";
    if (userId) {
        where = {
            user_id: userId
        }
    } else if (departmentId) {
        where = {
            department_id: departmentId
        }
    }
    UserDepartment.findAll({where}).then(userDepartments => {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({data: userDepartments}, null, 3)).status(200);
    }).catch(err => {
        console.log({err});
    });
};

exports.postAddUserDepartment = (req, res) => {
    const isEdit = req.body.edit;
    const isDelete = req.body.delete;
    const description = req.body.description;
    const userId = req.body.user_id;
    const departmentId = req.body.department_id;

    UserDepartment.create({
        user_department_id: uuid.v4(),
        edit: isEdit,
        delete: isDelete,
        user_id: userId,
        department_id: departmentId,
        description
    }).then((userDepartment ) => {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({data: userDepartment}, null, 3)).status(200);
    }).catch(err => {
        console.log(err);
    });
};

exports.postEditUserDepartment = (req, res) => {
    const isEdit = req.body.edit;
    const isDelete = req.body.delete;
    const description = req.body.description;
    const userId = req.body.user_id;
    const departmentId = req.body.department_id;
    UserDepartment.findByPk(userId)
        .then(userDepartment => {
            userDepartment.edit = isEdit;
            userDepartment.delete = isDelete;
            userDepartment.user_id = userId;
            userDepartment.department_id = departmentId;
            userDepartment.description = description;
            return userDepartment.save();
        })
        .then(result => {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({data: result}, null, 3)).status(200);
        })
        .catch(err => console.log(err));
};

exports.postDeleteUserDepartment = (req, res) => {
    const userDepartmentId = req.body.user_department_id;
    const userId = req.body.user_id ?? "";
    const departmentId = req.body.department_id ?? "";
    let where = {};
    if (userDepartmentId) {
        where = {
            user_department_id: userId
        }
    } else if (userId) {
        where = {
            user_id: userId
        }
    } else if (departmentId) {
        where = {
            department_id: departmentId
        }
    }
    UserDepartment.destroy({where}, {truncate: false})
        .then(result => {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({status: 200}, null, 3)).status(200);
        })
        .catch(err => console.log(err));
};
