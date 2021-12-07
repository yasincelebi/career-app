import Express from 'express';
import Validator from '../middlewares/validate';
import { getUser, createUser } from '../controllers/users';
import createUserValidation from '../validations/users';

const router = Express.Router();

router.get('/', getUser);
router.route('/signup').post(Validator.validate(createUserValidation), createUser);
 
export default router;
