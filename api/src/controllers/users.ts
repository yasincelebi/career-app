import { Request, Response } from 'express';

import httpStatus from 'http-status';
import { IUserRequest } from '../middlewares/authenticate';
import UserUtils from '../scripts/utils/userUtils';
import { insert, findUserById, findUserByEmail } from '../services/users';

const userUtils = new UserUtils();
export default class UsersController {
  public createUser = (req: Request, _res: Response): void => {
    req.body.password = userUtils.hashPassword(req.body.password);
    insert(req.body)
      .then((response) => {
        _res.status(httpStatus.CREATED).json(response);
      })
      .catch((err) => {
        _res.status(httpStatus.INTERNAL_SERVER_ERROR).json(err);
      });
  };

  public loginUser = (req: Request, _res: Response): void => {
    req.body.password = userUtils.hashPassword(req.body.password);

    findUserByEmail(req.body)
      .then((user) => {
        if (user && user?.password === req.body.password) {
          _res.status(httpStatus.OK).json({
            ...user,
            tokens: {
              accessToken: userUtils.generateAccessToken(user),
              refreshToken: userUtils.generateRefreshToken(user),
            },
          });
        } else {
          _res.status(httpStatus.UNAUTHORIZED).json({ message: 'Invalid credentials' });
        }
      })
      .catch((err) => {
        _res.status(httpStatus.INTERNAL_SERVER_ERROR).json(err);
      });
  };

  public getUser = (_req: IUserRequest, _res: Response): void => {
    findUserById({ id: _req.user.id })
      .then((result) => {
        _res.status(httpStatus.OK).json(result);
      })
      .catch((err) => {
        _res.status(httpStatus.INTERNAL_SERVER_ERROR).json(err);
      });
  };
}
