import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import jsonwebtoken from 'jsonwebtoken';

export interface IUserRequest extends Request {
  user?: any;
}
export default class Authenticate {
  public handle = (
    req: IUserRequest,
    res: Response,
    next: NextFunction,
  ): Response | void | boolean => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(httpStatus.UNAUTHORIZED).send({ message: 'Token not provided' });
    }
    const [, token] = authHeader.split(' ');

    if (!token) {
      return res.status(httpStatus.UNAUTHORIZED).send({ message: 'Token invalid' });
    }

    jsonwebtoken.verify(token, <string>process.env.JWT_ACCESS_TOKEN_SECRET, (err, decoded) => {
      if (err) {
        return res.status(httpStatus.UNAUTHORIZED).send({ message: 'Token invalid' });
      }

      req.user = decoded;

      return next();
    });
    return false;
  };
}
