import { Request, Response } from 'express';

const CustomError = require('./customError');

const apiErrorHandler = (
  err: { code: number; message: string },
  _req: Request,
  res: Response,
): any => {
  if (err instanceof CustomError) {
    res.status(err.code).json(err.message);

    return;
  }

  res.status(500).json('something went wrong');
};

export default apiErrorHandler;
