import { gql } from 'apollo-server';

const companyTypeDefs = gql`
  type Company {
    name: String
    id: ID!
  }
  input CompanyInput {
    name: String
    id: ID
  }
  type Query {
    allCompanies: [Company!]
    findOneCompany(where: String!, value: String!): Company
  }
  type Mutation {
    updateCompany(where: String!, value: String!, data: CompanyInput!): Company
    addJobToCompany(where: String!, value: String!, data: JobInput!): Company
    removeJobFromCompany(where: String!, value: String!, data: JobInput!): Company
    createCompany(data: CompanyInput!): Company
    deleteCompany(where: String!, value: String!): Company
  }
`;

export default companyTypeDefs;
