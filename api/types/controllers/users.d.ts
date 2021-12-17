import { Request, Response } from 'express';
import { IUserRequest } from '../middlewares/authenticate';
export default class UsersController {
    createUser: (req: Request, _res: Response) => void;
    loginUser: (req: Request, _res: Response) => void;
    getUser: (_req: IUserRequest, _res: Response) => void;
    resetPassword: (req: IUserRequest, _res: Response) => void;
}
