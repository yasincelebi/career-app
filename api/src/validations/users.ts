import Joi from 'joi';

// user validation
const createUserValidation = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  createdAt: Joi.date(),
  updatedAt: Joi.date(),
});

const loginUserValidation = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

const resetPasswordValidation = Joi.object({
  email: Joi.string().email().required(),
});

export { loginUserValidation, createUserValidation, resetPasswordValidation };

export declare interface ICreateUser {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}
