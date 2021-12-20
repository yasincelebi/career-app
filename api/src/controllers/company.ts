/* eslint-disable implicit-arrow-linebreak */
import { Request, Response } from 'express';
import _CompanyService from '../services/companyService';
import { IUserRequest } from '../middlewares/authenticate';

const companyService = new _CompanyService();
export default class CompanyController {
  public getAll = (_req: Request, res: Response): any => {
    companyService
      .listAll()
      .then((companies) => res.status(200).json({ companies }))
      .catch((err) => res.status(500).json({ err }));
  };

  public createCompany = (req: IUserRequest, res: Response): any => {
    req.body.userId = req.user.id;
    companyService
      .create({ value: req.body })
      .then((company) => res.status(200).json({ company }))
      // eslint-disable-next-line no-console
      .catch((_err) => console.log(_err));
  };
}
