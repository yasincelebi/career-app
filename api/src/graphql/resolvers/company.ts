import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const companyResolvers = {
  Query: {
    allCompanies: () => prisma.company.findMany(),
    oneCompany: (_: any, { id }: { id: string }) =>
      prisma.company.findUnique({
        where: {
          id,
        },
        include: {
          user: true,
        },
      }),
  },
};

export default companyResolvers;
