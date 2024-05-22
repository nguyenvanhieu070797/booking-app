const path = require('path');

const express = require('express');

const userController = require('../controllers/admin/user');

const router = express.Router();

// /admin/users => GET
router.get('/user', userController.getUsers);
router.get('/user/:user_id', userController.getUser);
router.post('/user/create', userController.postAddUser);
router.post('/user/update/:user_id', userController.postEditUser);
router.post('/user/delete', userController.postDeleteUser);

module.exports = router;
