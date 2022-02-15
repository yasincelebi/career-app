import { gql } from '@apollo/client'

export const GET_ALL_USERS = gql`
  query {
    allUsers {
      id
      name
      email
      password
    }
  }
`

export const REGISTER_USER = gql`
  mutation CreateUser($value: UserInput!) {
    createUser(value: $value) {
      id
      name
      email
    }
  }
`

export const LOGIN_USER = gql`
  mutation LoginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      email
      id
      name
    }
  }
`
