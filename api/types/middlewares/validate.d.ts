import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';
export declare class Validator implements IValidator {
    validate: (schema: Joi.ObjectSchema) => (req: Request, res: Response, next: NextFunction) => void | Response<any, Record<string, any>>;
}
export interface IValidator {
    validate(schema: Joi.ObjectSchema): (req: Request, res: Response, next: NextFunction) => void | Response<any, Record<string, any>> | NextFunction;
}
declare const _default: Validator;
export default _default;
