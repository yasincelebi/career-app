/* eslint-disable no-console */
import { ApolloServer } from 'apollo-server';
import schema from './schema';
import { context } from './context';

async function startApolloServer(): Promise<void> {
  const server = new ApolloServer({ schema, context });
  const { url } = await server.listen();

  console.log(`🚀 Server ready at ${url}`);
}
startApolloServer();
