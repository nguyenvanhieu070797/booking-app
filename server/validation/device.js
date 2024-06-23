const { check } = require('express-validator');

exports.deviceCreateValidation = [
    check('device_name').isLength({ min: 5 }).withMessage('must be at least 5 chars long'),
    check('total'),
    check('description'),
    check('amount_remain'),
    check('device_code'),
];

exports.deviceUpdateValidation = [
    check('device_name'),
    check('total'),
    check('description'),
    check('amount_remain'),
    check('device_code'),
];
