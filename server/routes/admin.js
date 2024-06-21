const express = require('express');
const userController = require('../controllers/admin/user');
const departmentController = require('../controllers/admin/department');
const userDepartmentController = require('../controllers/admin/user-department');
const deviceController = require('../controllers/admin/device');
const categoryController = require('../controllers/admin/category');
const categoryDeviceController = require('../controllers/admin/category-device');

const {userCreateValidation, userUpdateValidation} = require('../validation/user');
const {departmentCreateValidation, departmentUpdateValidation} = require('../validation/department');
const {departmentDepartmentCreateValidation, departmentDepartmentUpdateValidation} = require('../validation/user-department');

const router = express.Router();
const isAuth = require("../middleware/is-auth");

// /admin/users
router.get('/user', isAuth, userController.getUsers);
router.get('/user/:user_id', isAuth, userController.getUser);
router.post('/user/create', userCreateValidation, userController.postAddUser);
router.post('/user/update/:user_id', isAuth, userUpdateValidation, userController.postEditUser);
router.post('/user/delete', isAuth, userController.postDeleteUser);

// /admin/department
router.get('/department', isAuth, departmentController.getDepartments);
router.get('/department/:department_id', isAuth, departmentController.getDepartment);
router.post('/department/create', isAuth, departmentCreateValidation, departmentController.postAddDepartment);
router.post('/department/update/:department_id', isAuth, departmentUpdateValidation, departmentController.postEditDepartment);
router.post('/department/delete', isAuth, departmentController.postDeleteDepartment);

// /admin/user-department
router.post('/user-department', isAuth, userDepartmentController.getUserDepartment);
router.post('/user-department/create', isAuth, departmentDepartmentCreateValidation, userDepartmentController.postAddUserDepartment);
router.post('/user-department/update/:department_id', isAuth, departmentDepartmentUpdateValidation, userDepartmentController.postEditUserDepartment);
router.post('/user-department/delete', isAuth, userDepartmentController.postDeleteUserDepartment);

// /admin/categories
router.post('/categories', isAuth, categoryController.getCategories);
router.post('/categories/create', isAuth, categoryController.postAddCategory);
router.post('/categories/update/:category_id', isAuth, categoryController.postEditCategory);
router.post('/categories/delete', isAuth, categoryController.postDeleteCategory);

// /admin/categories-devices
router.post('/categories-devices', isAuth, categoryDeviceController.getCategoryDevices);
router.post('/categories-devices/create', isAuth, categoryDeviceController.postAddCategoryDevice);
router.post('/categories-devices/update/:category_device_id', isAuth, categoryDeviceController.postEditCategoryDevice);
router.post('/categories-devices/delete', isAuth, categoryDeviceController.postDeleteCategoryDevice);

// /admin/devices
router.post('/devices', isAuth, deviceController.getDevices);
router.post('/devices/create', isAuth, deviceController.postAddDevice);
router.post('/devices/update/:device_id', isAuth, deviceController.postEditDevice);
router.post('/devices/delete', isAuth, deviceController.postDeleteDevice);


module.exports = router;
