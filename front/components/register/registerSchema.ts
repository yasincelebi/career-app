import Joi from 'joi'

export const schema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .min(6)
    .messages({
      'string.empty': 'Email cannot be empty',
      'string.min': 'Email must contain at least 6 characters',
      'string.email': 'Email is not valid',
    }),
  password: Joi.string().required().min(6).messages({
    'string.empty': 'Password cannot be empty',
    'string.min': 'Password must contain at least 6 characters',
  }),
  confirmPassword: Joi.required().valid(Joi.ref('password')).messages({
    'any.only': 'Password and confirm password must match',
    'string.empty': 'Confirm password cannot be empty',
  }),
})
