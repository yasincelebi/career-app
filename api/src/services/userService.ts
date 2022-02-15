import {PrismaClient, User} from '@prisma/client';

import UserUtils from '../scripts/utils/userUtils';

import BaseService from './baseService';

const prisma = new PrismaClient();
const userUtils = new UserUtils();
export default class UserService extends BaseService<User> {

  create = async ({value}: { value: User }): Promise<User> => {
    const result: User = await prisma.user.create({
      data: {...value},
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
    const user = await prisma.user.findUnique({
      where: {email},
    });

    if (!user) {
      return null;
    }

    if (user && user?.password === userUtils.hashPassword(password)) {
      return {
        ...user,
        accessToken: userUtils.generateAccessToken(user),
        refreshToken: userUtils.generateRefreshToken(user),
      };
    }
    return null;
  };

  // eslint-disable-next-line max-len
  find = async ({ where, value }: {where: string, value: string}): Promise<User | null> => {
    const result = await prisma.user.findUnique({
      where: {
        [where]: value,
      },
    });
    return result;
  };

  listAll = async (): Promise<User[]> => {
    const result = await prisma.user.findMany();
    return result;
  };

  update = async ({where, value, data}: {where: string, value: string, data: User}):
  Promise<User | null> => {
    const result = await prisma.user.update({
      where: {
        [where]: value,
      },
      data,
    });
    return result;
  };
}

export interface LoginUser extends User {
  accessToken: string;
  refreshToken: string;
  error?: string;
}
