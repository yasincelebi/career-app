import { gql } from 'apollo-server';

const userTypeDefs = gql`
  type User {
    email: String!
    name: String
    id: ID!
    password: String
  }
  type Query {
    allUsers: [User!]!
    oneUser(id: ID!): User
    users: [User!]!
  }
  input UserInput {
    email: String!

    password: String!
  }
  type LoginUser {
    email: String!
    id: ID!
    accessToken: String!
    refreshToken: String!
    name: String
    password: String
  }
  type Mutation {
    createUser(value: UserInput!): User
    deleteUser(id: ID!): User
    loginUser(email: String!, password: String!): LoginUser
  }
`;

export default userTypeDefs;
