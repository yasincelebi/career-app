import Express from 'express';
import CompanyController from '../controllers/company';

import Authenticate from '../middlewares/authenticate';

const auth = new Authenticate();
const router = Express.Router();
const companyController = new CompanyController();

router.route('/').get(auth.handle, companyController.getAll);
router.route('/').post(auth.handle, companyController.createCompany);
export default router;
