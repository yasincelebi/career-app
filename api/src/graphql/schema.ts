import { makeExecutableSchema } from '@graphql-tools/schema';
import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge';
import { UserResolver, CompanyResolver } from './resolvers';
import { UserTypeDefs, CompanyTypeDefs } from './schemas';

const typeDefs = mergeTypeDefs([UserTypeDefs, CompanyTypeDefs]);
const resolvers = mergeResolvers([UserResolver, CompanyResolver]);
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export default schema;
