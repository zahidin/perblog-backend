import { ValidationChain, validationResult } from 'express-validator';
import { Request, Response, NextFunction, Handler } from 'express';

const errorFormatter = (param: any) => {
    console.log('errorFormatter -> param', param);
    return `${param.location}[${param.param}]: ${param.msg}`;
};

export default function validator(fields: ValidationChain[]): Function {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const fn = descriptor.value as Handler;
        descriptor.value = async function(req: Request, res: Response, next: NextFunction) {
            await Promise.all(fields.map(validator => validator.run(req)));
            const errors = validationResult(req).formatWith(errorFormatter);

            if (errors.isEmpty()) {
                return fn.call(this, req, res, next);
            } else {
                return res.status(400).send({ success: false, errors: errors.array() });
            }
        };
        return descriptor;
    };
}
