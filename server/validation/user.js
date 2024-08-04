const { check } = require('express-validator');

exports.userCreateValidation = [
    check('user_name').isLength({ min: 5 }).withMessage('must be at least 5 chars long'),
    check('password').isLength({ min: 5 }).withMessage('must be at least 5 chars long'),
    check('email').isEmail().withMessage('Email not valid!'),
    check('role').isLength({ min: 1 }).withMessage('must be at least 5 chars long'),
];

exports.userUpdateValidation = [
    check('user_name'),
    check('password'),
    check('email'),
];
