import { useMutation } from '@apollo/client'

import React from 'react'
import { joiResolver } from '@hookform/resolvers/joi'
import { REGISTER_USER } from '../../src/api/queries'
import { useForm } from 'react-hook-form'
import TextInput from '../shared/Input/TextInput'
import { schema } from './registerSchema'

import { useRouter } from 'next/router'

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { touchedFields, errors, isSubmitted },
  } = useForm({ resolver: joiResolver(schema) })
  const router = useRouter()

  const [sendRegister, { data, loading, error }] = useMutation(REGISTER_USER)
  const onSubmit = (data: any) => {
    sendRegister({
      variables: {
        value: {
          email: data.email,
          id: '1234567890123',
          password: data.password,
          name: 'yasin',
        },
      },
    })
      .then((res, a) => {})
      .catch((err) => {
        console.log(err)
      })
  }
  return (
    <div className="w-full max-w-md mx-auto backdrop-filter backdrop-blur transition-all duration-500 ">
      <div className="bg-white rounded px-8 pt-6">
        <div className="mb-4">
          <h1 className="text-2xl font-bold text-center text-primary">
            Register and find your dream job!
          </h1>
        </div>
        <form className="" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6">
            <label className="block text-gray-700 text-lg font-bold mb-2">
              Email
            </label>
            <TextInput
              {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
              key={'email'}
              placeholder="joe@doe.com"
              classnames={
                (touchedFields.email || isSubmitted) && errors.email
                  ? 'border-2 border-red-500'
                  : ''
              }
            />
            {(touchedFields.email || isSubmitted) && errors.email && (
              <div className="text-red-500 text-sm">{errors.email.message}</div>
            )}
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-lg font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <TextInput
              {...register('password', { required: true })}
              key={'password'}
              classnames={
                (touchedFields.password || isSubmitted) && errors.password
                  ? 'border-2 border-red-500'
                  : ''
              }
            />
            {(touchedFields.password || isSubmitted) && errors.password && (
              <div className="text-red-500 text-sm">
                {errors.password.message}
              </div>
            )}
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-lg font-bold mb-2"
              htmlFor="password"
            >
              Confirm Password
            </label>
            <TextInput
              {...register('confirmPassword', { required: true })}
              key={'confirmPassword'}
              classnames={
                (touchedFields.confirmPassword || isSubmitted) &&
                errors.confirmPassword
                  ? 'border-2 border-red-500'
                  : ''
              }
            />
            {(touchedFields.confirmPassword || isSubmitted) &&
              errors.confirmPassword && (
                <div className="text-red-500 text-sm ">
                  {errors.confirmPassword.message}
                </div>
              )}
          </div>
          <div>
            Zaten bi hesabın var mı?{' '}
            <span className="first-letter:pointer-events-none selection:disabled">
              Giriş Yap
            </span>
          </div>
          <div className="flex justify-center mt-6">
            <button
              className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default RegisterForm
