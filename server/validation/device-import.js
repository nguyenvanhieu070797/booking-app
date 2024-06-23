const { check } = require('express-validator');

exports.departmentCreateValidation = [
    check('department_name').isLength({ min: 1 }).withMessage('Tên phòng ban không được trống.'),
    check('locate').isLength({ min: 1 }).withMessage('Vị tri phong ban không được trống.'),
    check('description'),
];

exports.departmentUpdateValidation = [
    check('department_name'),
    check('locate'),
    check('description'),
];
