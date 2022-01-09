import { gql } from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Company = {
  __typename?: 'Company';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};

export type CompanyInput = {
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
};

export type Job = {
  __typename?: 'Job';
  company?: Maybe<Company>;
  companyId: Scalars['ID'];
  createdAt?: Maybe<Scalars['String']>;
  description: Scalars['String'];
  id: Scalars['ID'];
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
};

export type JobInput = {
  company?: InputMaybe<CompanyInput>;
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  title?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addJobToCompany?: Maybe<Company>;
  createCompany?: Maybe<Company>;
  createJob?: Maybe<Job>;
  createUser?: Maybe<User>;
  deleteCompany?: Maybe<Company>;
  deleteJob?: Maybe<Job>;
  deleteUser?: Maybe<User>;
  removeJobFromCompany?: Maybe<Company>;
  updateCompany?: Maybe<Company>;
  updateJob?: Maybe<Job>;
};


export type MutationAddJobToCompanyArgs = {
  data: JobInput;
  value: Scalars['String'];
  where: Scalars['String'];
};


export type MutationCreateCompanyArgs = {
  data: CompanyInput;
};


export type MutationCreateJobArgs = {
  data: JobInput;
};


export type MutationCreateUserArgs = {
  value: UserInput;
};


export type MutationDeleteCompanyArgs = {
  value: Scalars['String'];
  where: Scalars['String'];
};


export type MutationDeleteJobArgs = {
  value: Scalars['String'];
  where: Scalars['String'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID'];
};


export type MutationRemoveJobFromCompanyArgs = {
  data: JobInput;
  value: Scalars['String'];
  where: Scalars['String'];
};


export type MutationUpdateCompanyArgs = {
  data: CompanyInput;
  value: Scalars['String'];
  where: Scalars['String'];
};


export type MutationUpdateJobArgs = {
  data: JobInput;
  value: Scalars['String'];
  where: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  allCompanies?: Maybe<Array<Company>>;
  allJobs?: Maybe<Array<Job>>;
  allUsers: Array<User>;
  findOneCompany?: Maybe<Company>;
  findOneJob?: Maybe<Job>;
  oneUser?: Maybe<User>;
};


export type QueryFindOneCompanyArgs = {
  value: Scalars['String'];
  where: Scalars['String'];
};


export type QueryFindOneJobArgs = {
  value: Scalars['String'];
  where: Scalars['String'];
};


export type QueryOneUserArgs = {
  id: Scalars['ID'];
};

export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};

export type UserInput = {
  email: Scalars['String'];
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
};


      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {}
};
      export default result;
    