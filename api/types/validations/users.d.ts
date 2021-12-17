import Joi from 'joi';
declare const createUserValidation: Joi.ObjectSchema<any>;
declare const loginUserValidation: Joi.ObjectSchema<any>;
declare const resetPasswordValidation: Joi.ObjectSchema<any>;
export { loginUserValidation, createUserValidation, resetPasswordValidation };
export declare interface ICreateUser {
    name: string;
    email: string;
    password: string;
    passwordConfirmation: string;
}
