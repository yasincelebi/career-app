import { User, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
export const insert = async (_user: User): Promise<User | null | undefined> => {
  const create = await prisma.user
    .create({
      data: { ..._user, createdAt: new Date(), updatedAt: new Date() },
    })
    .catch((err) => {
      console.log(err);
      return null;
    });
  return create;
};

export const find = async (data: { id: string }): Promise<User | null> => {
  const { id } = data;
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
  });
  return user;
};
