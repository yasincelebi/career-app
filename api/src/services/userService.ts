/* eslint-disable class-methods-use-this */
import { PrismaClient, User } from '@prisma/client';

import logger from '../scripts/logger/users';
import BaseService from './baseService';

const prisma = new PrismaClient();

export default class UserService extends BaseService {
  constructor() {
    super('user');
  }

  public create = async ({ value }: { value: User }): Promise<User> => {
    const result = await (prisma as any)[this.BaseModel].create({
      data: { ...value },
    });
    return result;
  };
}

prisma.$use(async (params: any, next) => {
  logger.log({ level: 'info', message: params, service: 'user-service' });
  const result = await next(params);
  return result;
});
