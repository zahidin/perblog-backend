import { body, param } from 'express-validator';
import { string, required } from '@/constant/errorMessageValidation';

export const validationCreate = [
    body('title')
        .isString()
        .withMessage(string)
        .exists()
        .withMessage(required),
    body('date')
        .isString()
        .withMessage(string)
        .exists()
        .withMessage(required),
    body('content')
        .isString()
        .withMessage(string)
        .exists()
        .withMessage(required),
    body('tags')
        .isString()
        .withMessage(string),
];

export const validationShow = [
    param('slug')
        .exists()
        .withMessage(required),
];

export const validationDelete = [
    param('id')
        .exists()
        .withMessage(required),
];
