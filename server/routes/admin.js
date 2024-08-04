const express = require('express');
const userController = require('../controllers/admin/user');
const departmentController = require('../controllers/admin/department');
const userDepartmentController = require('../controllers/admin/user-department');
const deviceController = require('../controllers/admin/device');
const categoryController = require('../controllers/admin/category');
const categoryDeviceController = require('../controllers/admin/category-device');
const deviceImportController = require('../controllers/admin/device-import');

// User
const {userCreateValidation, userUpdateValidation} = require('../validation/user');
const {departmentCreateValidation, departmentUpdateValidation} = require('../validation/department');
const {departmentDepartmentCreateValidation, departmentDepartmentUpdateValidation} = require('../validation/user-department');

// Device
const {deviceCreateValidation, deviceUpdateValidation} = require('../validation/device');
const {deviceImportCreateValidation, deviceImportUpdateValidation} = require('../validation/device-import');

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

// /admin/category
router.get('/category', isAuth, categoryController.getCategories);
router.get('/category/:category_id', isAuth, categoryController.getCategory);
router.post('/category/create', isAuth, categoryController.postAddCategory);
router.post('/category/update/:category_id', isAuth, categoryController.postEditCategory);
router.post('/category/delete', isAuth, categoryController.postDeleteCategory);

// /admin/category-device
router.get('/category-device', isAuth, categoryDeviceController.getCategoryDevices);
router.get('/category-device/:category_device_id', isAuth, categoryDeviceController.getCategoryDevice);
router.post('/category-device/create', isAuth, categoryDeviceController.postAddCategoryDevice);
router.post('/category-device/update/:category_device_id', isAuth, categoryDeviceController.postEditCategoryDevice);
router.post('/category-device/delete', isAuth, categoryDeviceController.postDeleteCategoryDevice);

// /admin/device
router.get('/device', isAuth, deviceController.getDevices);
router.post('/device/create', isAuth, deviceCreateValidation, deviceController.postAddDevice);
router.post('/device/update/:device_id', isAuth, deviceUpdateValidation, deviceController.postEditDevice);
router.post('/device/delete', isAuth, deviceController.postDeleteDevice);

// /admin/device-import
router.get('/device-import', isAuth, deviceImportController.getDeviceImports);
router.get('/device-import/:device_import_id', isAuth, deviceImportController.getDeviceImport);
router.post('/device-import/create', isAuth, deviceImportCreateValidation, deviceImportController.postAddDeviceImport);
router.post('/device-import/update/:device_import_id', isAuth, deviceImportUpdateValidation, deviceImportController.postEditDeviceImport);
router.post('/device-import/delete', isAuth, deviceImportController.postDeleteDeviceImport);

// /admin/device-count
router.get('/device-count', isAuth, deviceController.getDevices);
router.post('/device-count/create', isAuth, deviceCreateValidation, deviceController.postAddDevice);
router.post('/device-count/update/:device_id', isAuth, deviceUpdateValidation, deviceController.postEditDevice);
router.post('/device-count/delete', isAuth, deviceController.postDeleteDevice);

module.exports = router;
