import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const userResolvers = {
  Query: {
    allUsers: () => prisma.user.findMany(),
    oneUser: (_: any, { id }: { id: string }) =>
      prisma.user.findUnique({
        where: {
          id,
        },
        include: {
          Company: true,
        },
      }),
  },
};

export default userResolvers;
