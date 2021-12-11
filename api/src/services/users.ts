import { User, PrismaClient } from '@prisma/client';
import logger from '../scripts/logger/users';

const prisma = new PrismaClient();
export const insert = async (_user: User): Promise<User | null | undefined> => {
  const create = await prisma.user
    .create({
      data: { ..._user, createdAt: new Date(), updatedAt: new Date() },
    })
    .catch((err) => err);
  return create;
};

export const findUserById = async (data: { id: string }): Promise<User | null> => {
  const { id } = data;
  console.log(id);
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
  });

  return user;
};

export const findUserByEmail = async (data: { email: string }): Promise<User | null> => {
  const { email } = data;
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  return user;
};

prisma.$use(async (params: any, next) => {
  logger.log({ level: 'info', message: params, service: 'user-service' });
  const result = await next(params);
  console.log(result);
  return result;
});
