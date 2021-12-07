import Express from 'express';
import helmet from 'helmet';

import cors from 'cors';
import { UserRouter } from './api-routes';

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

// routes
app.use('/user', UserRouter);

// start server
app.listen(process.env.PORT, () => {
  console.log('Server started on port 3000');
});
