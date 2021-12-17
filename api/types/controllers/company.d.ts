import { Request, Response } from 'express';
import { IUserRequest } from '../middlewares/authenticate';
export default class CompanyController {
    getAll: (_req: Request, res: Response) => any;
    createCompany: (req: IUserRequest, res: Response) => any;
}
