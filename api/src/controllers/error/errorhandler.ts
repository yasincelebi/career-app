import { NextFunction, Request, Response } from 'express';

const apiErrorHandler = (_req: Request, _res: Response, next: NextFunction): any => next();
export default apiErrorHandler;
