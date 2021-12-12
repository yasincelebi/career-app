import Express from 'express';
import Validator from '../middlewares/validate';
import UsersController from '../controllers/users';
import {
  createUserValidation,
  loginUserValidation,
  resetPasswordValidation,
} from '../validations/users';
import Authenticate from '../middlewares/authenticate';

const auth = new Authenticate();
const router = Express.Router();
const usersController = new UsersController();

router.route('/').get(auth.handle, usersController.getUser);
router.route('/signup').post(Validator.validate(createUserValidation), usersController.createUser);
router.route('/login').post(Validator.validate(loginUserValidation), usersController.loginUser);
router
  .route('/reset-password')
  .post(Validator.validate(resetPasswordValidation), usersController.resetPassword);

export default router;
