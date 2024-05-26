const express = require('express');
const userController = require('../controllers/admin/user');
const departmentController = require('../controllers/admin/department');
const userDepartmentController = require('../controllers/admin/user-department');
const Tesseract = require("tesseract.js");
const path = require("path");

const router = express.Router();

// /admin/users
router.get('/user', userController.getUsers);
router.get('/user/:user_id', userController.getUser);
router.post('/user/create', userController.postAddUser);
router.post('/user/update/:user_id', userController.postEditUser);
router.post('/user/delete', userController.postDeleteUser);

// /admin/department
router.get('/department', departmentController.getDepartments);
router.get('/department/:department_id', departmentController.getDepartment);
router.post('/department/create', departmentController.postAddDepartment);
router.post('/department/update/:department_id', departmentController.postEditDepartment);
router.post('/department/delete', departmentController.postDeleteDepartment);

// /admin/user-department
router.post('/user-department', userDepartmentController.getUserDepartment);
router.post('/user-department/create', userDepartmentController.postAddUserDepartment);
router.post('/user-department/update/:department_id', userDepartmentController.postEditUserDepartment);
router.post('/user-department/delete', userDepartmentController.postDeleteUserDepartment);

router.get("/img-upload", (req, res) => {
    return Tesseract
        .recognize(path.join(__dirname, "../public/images/img.png"))
        .then((result) => {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({
                data: result.data.text
            }, null, 3)).status(200);
        })
        .catch((error) => {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({message: error.message}, null, 3)).status(302);
        })
})

module.exports = router;
