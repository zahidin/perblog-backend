import { body } from 'express-validator';
import { string, required } from '@/constant/errorMessageValidation';

export const validationLogin = [
    body('username')
        .isString()
        .withMessage(string)
        .exists()
        .withMessage(required),
    body('password')
        .isString()
        .withMessage(string)
        .exists()
        .withMessage(required),
];

export const validationRegister = [
    body('username')
        .isString()
        .withMessage(string)
        .exists()
        .withMessage(required),
    body('firstName')
        .isString()
        .withMessage(string)
        .exists()
        .withMessage(required),
    body('lastName')
        .isString()
        .withMessage(string)
        .exists()
        .withMessage(required),
    body('password')
        .isString()
        .withMessage(string)
        .exists()
        .withMessage(required),
];
