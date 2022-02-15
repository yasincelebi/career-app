import express from 'express';
import CompanyController from '../controllers/company';

import Authenticate from '../middlewares/authenticate';

const auth = new Authenticate();

// @ts-ignore
const router = express.Router();
const companyController = new CompanyController();

router.route('/').get(auth.handle, companyController.getAll);
router.route('/').post(auth.handle, companyController.createCompany);

export default router;
