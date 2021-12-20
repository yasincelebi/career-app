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
  }
  input UserInput {
    email: String!
    name: String
    id: ID!
  }
  type Mutation {
    createUser(value: UserInput!): User
    deleteUser(id: ID!): User
  }
`;

export default userTypeDefs;
