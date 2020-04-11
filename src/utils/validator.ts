import { ValidationChain, validationResult } from 'express-validator';
import { Request, Response as ResponseType, NextFunction, Handler } from 'express';
import Response from './response';
import { FAILED } from '@/constant/flag';

const errorFormatter = (param: any) => {
    return `${param.location}[${param.param}]: ${param.msg}`;
};

export default function validator(fields: ValidationChain[]): Function {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const fn = descriptor.value as Handler;
        descriptor.value = async function(req: Request, res: ResponseType, next: NextFunction) {
            await Promise.all(fields.map(validator => validator.run(req)));
            const errors = validationResult(req).formatWith(errorFormatter);

            if (errors.isEmpty()) {
                return fn.call(this, req, res, next);
            } else {
                return Response.badRequest(errors.array(), res, FAILED.flag);
            }
        };
        return descriptor;
    };
}
