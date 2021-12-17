import Express from 'express';
import helmet from 'helmet';

import cors from 'cors';

import { CompanyRouter, UserRouter } from './api-routes';
import apiErrorHandler from './controllers/error/errorhandler';

const config = require('./config');

const app = Express();

// use
config();
app.use(Express.json());
app.use(helmet());
app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
    preflightContinue: false,
    optionsSuccessStatus: 204,
  }),
);
app.use(apiErrorHandler);
// routes
app.use('/user', UserRouter);
app.use('/company', CompanyRouter);

// start server
app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Server started on port 3000');
});
