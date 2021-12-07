import Joi from 'joi';

// user validation
const createUserValidation = Joi.object({
  id: Joi.string().required(),
  name: Joi.string().required().min(3).max(30),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  createdAt: Joi.date(),
  updatedAt: Joi.date(),
  companyId: Joi.any(),
  contactId: Joi.any(),
});

export default createUserValidation;

export interface ICreateUser {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}
