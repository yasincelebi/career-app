import { NextFunction, Request, Response } from 'express';
export interface IUserRequest extends Request {
    user?: any;
    email?: any;
}
export default class Authenticate {
    handle: (req: IUserRequest, res: Response, next: NextFunction) => Response | void | boolean;
}
