import { body } from "express-validator";

export const createUserValidation = [
    body('name').notEmpty().withMessage('Enter your name'),
    body('email')
        .notEmpty().withMessage('Enter your email.')
        .isEmail().withMessage('Enter valid email.'),
    body("age")
        .isInt({ min: 18, max: 80 }).withMessage("Age must be a munber between 18 and 80")
];