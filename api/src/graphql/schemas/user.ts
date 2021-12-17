import { gql } from 'apollo-server';

const userTypeDefs = gql`
  type User {
    email: String!
    name: String
    id: ID!
    Company: Company!
  }
  type Query {
    allUsers: [User!]!
    oneUser(id: ID!): User
  }
`;

export default userTypeDefs;
