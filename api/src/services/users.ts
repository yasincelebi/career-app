import { User, PrismaClient, Prisma } from '@prisma/client';

import logger from '../scripts/logger/users';

const prisma = new PrismaClient();

export default class UserService {
  public insert = async (user: User): Promise<User | null | undefined> => {
    const create = await prisma.user
      .create({
        data: user,
      })
      .catch((err) => err);
    console.log(create);
    return create;
  };

  public findUserById = async (data: { id: string }): Promise<User | null> => {
    const { id } = data;
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });
    console.log(user);

    return user;
  };

  public static findUserByEmail = async (data: { email: string }): Promise<User | null> => {
    const { email } = data;
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    return user;
  };

  public static update = async (data: {
    where: Prisma.UserWhereUniqueInput;
    willUpdateData: any;
  }): Promise<User | null> => {
    const { where, willUpdateData } = data;
    const user = await prisma.user.update({
      where,
      data: { ...willUpdateData, updatedAt: new Date() },
    });

    return user;
  };
}

prisma.$use(async (params: any, next) => {
  logger.log({ level: 'info', message: params, service: 'user-service' });
  const result = await next(params);
  return result;
});
