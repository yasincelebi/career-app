/* eslint-disable no-unused-vars */
import { Request, Response, NextFunction } from 'express';
import httpStatus from 'http-status';
import Joi from 'joi';

export class Validator implements IValidator {
  public validate =
  (schema: Joi.ObjectSchema) => (req: Request, res: Response, next: NextFunction) => {
    const { error, value } = schema.validate(req.body);

    if (!error) {
      Object.assign(req, value);
      return next();
    }
    const errorMessages = error.details.map((err) => err.message).join(', ');

    return res.status(httpStatus.BAD_REQUEST).json({
      error: errorMessages,
    });
  };
}

export interface IValidator {
  validate(
    schema: Joi.ObjectSchema,
  ): (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => void | Response<any, Record<string, any>> | NextFunction;
}
export default new Validator();
