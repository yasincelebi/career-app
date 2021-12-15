/* eslint-disable implicit-arrow-linebreak */
import { NextFunction, Request, Response } from 'express';
import { IUserRequest } from '../middlewares/authenticate';
import CompanyService from '../services/company';
import CustomError from './error/customError';

const companyService = new CompanyService();
export default class CompanyController {
  public getAll = (_req: Request, res: Response): any => {
    companyService
      .getCompanies()
      .then((companies) => res.status(200).json({ companies }))
      .catch((err) => res.status(500).json({ err }));
  };

  public createCompany = (req: IUserRequest, res: Response): any => {
    req.body.userId = req.user.id;
    companyService
      .createCompany(req.body)
      .then((company) => res.status(200).json({ company }))
      // eslint-disable-next-line no-console
      .catch((_err) => console.log(_err));
  };

  // eslint-disable-next-line no-unused-vars
  public addUserToCompany = (req: IUserRequest, res: Response, _next: NextFunction): any => {
    if (!req.body.id) {
      res.send(CustomError.badRequest('msg field is required and must be non blank'));
      return;
    }
    companyService
      .addUserToCompany(req.params.id, req.user.id)
      .then((company) => res.status(200).json({ company }))
      // eslint-disable-next-line no-console
      .catch((_err) => console.log(_err));
  };
}
