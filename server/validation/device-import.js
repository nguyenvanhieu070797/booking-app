const { check } = require('express-validator');

exports.deviceImportCreateValidation = [
    check('device_import_name').isLength({ min: 1 }).withMessage('Tên phòng ban không được trống.'),
    check('total'),
    check('access'),
    check('delete'),
    check('description'),
];

exports.deviceImportUpdateValidation = [
    check('device_import_name'),
    check('total'),
    check('access'),
    check('delete'),
    check('description'),
];
