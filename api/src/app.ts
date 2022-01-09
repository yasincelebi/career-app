import Express from 'express';
import helmet from 'helmet';

import cors from 'cors';

import { CompanyRouter, UserRouter } from './api-routes';
import apiErrorHandler from './controllers/error/errorhandler';
import startApolloServer from './graphql/server';

const config = require('./config');

const app = Express();
app.use(apiErrorHandler);
// use
config();
app.use(Express.json());
app.use(
  helmet({ contentSecurityPolicy: process.env.NODE_ENV === 'production' ? undefined : false }),
);
app.use(
  cors({
    origin: 'http://localhost:3000',

    credentials: true,
  }),
);

startApolloServer(app)
  .then((e) => {
    console.log(e);
  })
  .catch((err) => {
    console.log(err);
  });

// routes
app.use('/user', UserRouter);
app.use('/company', CompanyRouter);

// start server
app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Server started on port 3000');
});
