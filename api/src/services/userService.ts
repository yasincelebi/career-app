/* eslint-disable class-methods-use-this */
import { PrismaClient, User } from '@prisma/client';

import UserUtils from '../scripts/utils/userUtils';

import BaseService from './baseService';

const prisma = new PrismaClient();
const userUtils = new UserUtils();
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

  public loginUser = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }): Promise<LoginUser | null> => {
    const user = await (prisma as any).user.findUnique({
      where: { email },
    });

    console.log(user.password, userUtils.hashPassword(password));

    if (user && user?.password === userUtils.hashPassword(password)) {
      return {
        ...user,
        accessToken: userUtils.generateAccessToken(user),
        refreshToken: userUtils.generateRefreshToken(user),
      };
    } else {
      return null;
    }
  };
}

export interface LoginUser extends User {
  accessToken: string;
  refreshToken: string;
  error: string;
}
