import { gql } from 'apollo-server';

const companyTypeDefs = gql`
  type Company {
    name: String
    id: ID!
  }
  type Query {
    allCompanies: [Company!]
    oneCompany(id: ID!): Company
  }
`;

export default companyTypeDefs;
