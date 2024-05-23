const path = require('path');

const express = require('express');

const userController = require('../controllers/admin/user');
const departmentController = require('../controllers/admin/department');

const router = express.Router();

// /admin/users => GET
router.get('/user', userController.getUsers);
router.get('/user/:user_id', userController.getUser);
router.post('/user/create', userController.postAddUser);
router.post('/user/update/:user_id', userController.postEditUser);
router.post('/user/delete', userController.postDeleteUser);

// /admin/department => GET
router.get('/department', departmentController.getDepartments);
router.get('/department/:department_id', departmentController.getDepartment);
router.post('/department/create', departmentController.postAddDepartment);
router.post('/department/update/:department_id', departmentController.postEditDepartment);
router.post('/department/delete', departmentController.postDeleteDepartment);

module.exports = router;
