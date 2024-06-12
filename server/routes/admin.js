const express = require('express');
const userController = require('../controllers/admin/user');
const departmentController = require('../controllers/admin/department');
const userDepartmentController = require('../controllers/admin/user-department');
const deviceController = require('../controllers/admin/device');
const categoryController = require('../controllers/admin/category');
const categoryDeviceController = require('../controllers/admin/category-device');

const { body } = require('express-validator');
const Tesseract = require("tesseract.js");
const path = require("path");

const router = express.Router();

// /admin/users
router.get('/user', userController.getUsers);
router.get('/user/:user_id', userController.getUser);
router.post('/user/create', [
    body('user_name')
        .trim(),
    body('email')
        .trim(),
    body('password')
        .trim()
], userController.postAddUser);
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

// /admin/categories
router.get('/categories', categoryController.getCategories);
router.post('/categories', categoryController.getCategories);
router.post('/categories/create', categoryController.postAddCategory);
router.post('/categories/update/:category_id', categoryController.postEditCategory);
router.post('/categories/delete', categoryController.postDeleteCategory);

// /admin/categories-devices
router.post('/categories-devices', categoryDeviceController.getCategoryDevices);
router.post('/categories-devices/create', categoryDeviceController.postAddCategoryDevice);
router.post('/categories-devices/update/:category_device_id', categoryDeviceController.postEditCategoryDevice);
router.post('/categories-devices/delete', categoryDeviceController.postDeleteCategoryDevice);

// /admin/devices
router.post('/devices', deviceController.getDevices);
router.post('/devices/create', deviceController.postAddDevice);
router.post('/devices/update/:device_id', deviceController.postEditDevice);
router.post('/devices/delete', deviceController.postDeleteDevice);

router.get("/img-upload", (req, res) => {
    return Tesseract
        .recognize(path.join(__dirname, "../public/images/orc/img.png"))
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
