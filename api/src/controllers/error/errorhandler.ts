import { Request, Response } from 'express';

const apiErrorHandler = (
  err: { code: number; message: string },
  _req: Request,
  res: Response,
): any => {
  res.status(err.code).json(err.message);
};
export default apiErrorHandler;
