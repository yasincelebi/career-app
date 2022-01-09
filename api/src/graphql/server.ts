/* eslint-disable no-console */
import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import http from 'http';
import schema from './schema';
import { prismaContext } from './context';

export default async function startApolloServer(app: any): Promise<void> {
  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    schema,
    context: ({ req }) => ({
      prismaContext,
      req,
    }),
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await server.start();

  server.applyMiddleware({
    app,
    // By default, apollo-server hosts its GraphQL endpoint at the
    // server root. However, *other* Apollo Server packages host it at
    // /graphql. Optionally provide this to match apollo-server.
    path: '/graphql',
    cors: false,
  });

  await new Promise<void>((resolve) => app.listen({ port: 4000 }, resolve));
}
