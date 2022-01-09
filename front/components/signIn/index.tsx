import { useMutation } from '@apollo/client'
import { joiResolver } from '@hookform/resolvers/joi'
import React from 'react'
import { useForm } from 'react-hook-form'
import { LOGIN_USER } from '../../src/api/queries'
import TextInput from '../shared/Input/TextInput'
import { schema } from './signInSchema'

const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { touchedFields, errors, isSubmitted },
  } = useForm({ resolver: joiResolver(schema) })
  const [sendLogin, { data, loading, error }] = useMutation(LOGIN_USER)
  const onSubmit = (data: any) => {
    sendLogin({
      variables: {
        email: data.email,
        password: data.password,
      },
    })
      .then((e) => {
        console.log(e)
      })
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

          <div className="flex justify-center mt-6">
            <button
              className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignInForm
