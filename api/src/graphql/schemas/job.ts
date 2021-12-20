import { gql } from 'apollo-server';

const jobTypeDefs = gql`
  type Job {
    id: ID!
    title: String!
    description: String!
    company: Company
    companyId: ID!
    createdAt: String
    updatedAt: String
  }
  input JobInput {
    id: ID!
    title: String
    description: String
    company: CompanyInput
  }
  type Query {
    allJobs: [Job!]
    findOneJob(where: String!, value: String!): Job
  }
  type Mutation {
    updateJob(where: String!, value: String!, data: JobInput!): Job
    createJob(data: JobInput!): Job
    deleteJob(where: String!, value: String!): Job
  }
`;

export default jobTypeDefs;
