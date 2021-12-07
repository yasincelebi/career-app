import { Request, Response } from 'express';

import httpStatus from 'http-status';
import { insert, find } from '../services/users';

export const getUser = (_req: Request, _res: Response): void => {
  find({ id: '123' })
    .then((result) => {
      _res.status(httpStatus.OK).json(result);
    })
    .catch((err) => {
      _res.status(httpStatus.INTERNAL_SERVER_ERROR).json(err);
    });
};

export const createUser = (req: Request, _res: Response): void => {
  insert(req.body)
    .then((response) => {
      _res.status(httpStatus.CREATED).json(response);
    })
    .catch((err) => {
      _res.status(httpStatus.INTERNAL_SERVER_ERROR).json(err);
    });
};
