import { makeExecutableSchema } from '@graphql-tools/schema';
import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge';
import { UserResolver, CompanyResolver, JobResolver } from './resolvers';
import { UserTypeDefs, CompanyTypeDefs, JobTypeDefs } from './schemas';

const typeDefs = mergeTypeDefs([UserTypeDefs, CompanyTypeDefs, JobTypeDefs]);
const resolvers = mergeResolvers([UserResolver, CompanyResolver, JobResolver]);
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export default schema;
