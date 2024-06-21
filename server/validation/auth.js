import {body} from 'express-validator';

export const loginValidation = [
    body('user_name', 'Invalid does not Empty').not().isEmpty(),
    body('password', 'The minimum password length is 6 characters').isLength({min: 6}),
]