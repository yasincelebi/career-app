import { Request, Response } from 'express';

import httpStatus from 'http-status';
import { v4 } from 'uuid';
import { IUserRequest } from '../middlewares/authenticate';
import UserUtils from '../scripts/utils/userUtils';
import UserService from '../services/userService';

const userUtils = new UserUtils();
const userService = new UserService();

export default class UsersController {
  public createUser = (req: Request, _res: Response): void => {
    req.body.password = userUtils.hashPassword(req.body.password);
    userService
      .create({ value: req.body })
      .then((response) => {
        _res.status(httpStatus.CREATED).json(response);
      })
      .catch((err) => {
        _res.status(httpStatus.INTERNAL_SERVER_ERROR).json(err);
      });
  };

  public loginUser = (req: Request, res: Response): void => {
    req.body.password = userUtils.hashPassword(req.body.password);
    userService
      .find({ where: 'email', value: req.body.email })
      .then((user) => {
        if (user && user?.password === req.body.password) {
          res.status(httpStatus.OK).json({
            ...user,
            tokens: {
              accessToken: userUtils.generateAccessToken(user),
              refreshToken: userUtils.generateRefreshToken(user),
            },
          });
        } else {
          res.status(httpStatus.UNAUTHORIZED).json({ message: 'Invalid credentials' });
        }
      })
      .catch((err) => {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json(err);
      });
  };

  public getUser = (_req: IUserRequest, _res: Response): void => {
    userService
      .find({ where: 'id', value: _req.user.id })
      .then((result) => {
        _res.status(httpStatus.OK).json(result);
      })
      .catch((err) => {
        _res.status(httpStatus.INTERNAL_SERVER_ERROR).json(err);
      });
  };

  public resetPassword = (req: IUserRequest, _res: Response): void => {
    userService
      .find({ where: 'email', value: req.body.email })
      .then((user) => {
        if (!user) {
          _res.status(httpStatus.NOT_FOUND).json({ message: 'User not found' });
        } else {
          const password = v4();
          userService
            .update({
              where: 'id',
              value: user.id,
              data: {
                ...user,
                password: userUtils.hashPassword(password),
              },
            })
            .then(() => {
              _res.status(httpStatus.OK).json({ password: password.split('-')[0] });
            })
            .catch((err) => {
              _res.status(httpStatus.INTERNAL_SERVER_ERROR).json(err);
            });
        }
      })
      .catch((err) => {
        _res.status(httpStatus.INTERNAL_SERVER_ERROR).json(err);
      });
  };
}
