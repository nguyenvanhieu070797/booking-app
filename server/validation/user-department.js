const { check } = require('express-validator');

exports.departmentDepartmentCreateValidation = [
    check('user_id').isLength({ min: 1 }).withMessage('Tên người dùng không được trống.'),
    check('department_id').isLength({ min: 1 }).withMessage('Tên phòng ban không được trống.'),
    check('edit'),
    check('delete'),
];

exports.departmentDepartmentUpdateValidation = [
    check('user_id'),
    check('department_id'),
    check('edit'),
    check('delete'),
];
