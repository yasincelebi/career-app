/* eslint-disable implicit-arrow-linebreak */
import { Request, Response } from 'express';
import { IUserRequest } from 'src/middlewares/authenticate';
import CompanyService from '../services/company';

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
      .catch((err) => console.log(err));
  };
}
