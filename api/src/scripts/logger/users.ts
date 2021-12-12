import winston from 'winston';

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    new winston.transports.File({ filename: 'src/logs/users/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'src/logs/users/info.log', level: 'info' }),
    new winston.transports.File({ filename: 'src/logs/users/warning.log', level: 'warning' }),
    new winston.transports.File({ filename: 'src/logs/users/combined.log' }),
  ],
});

export default logger;
