declare const companyResolvers: {
    Query: {
        allCompanies: () => import(".prisma/client").PrismaPromise<import(".prisma/client").Company[]>;
        oneCompany: (_: any, { id }: {
            id: string;
        }) => import(".prisma/client").Prisma.Prisma__CompanyClient<(import(".prisma/client").Company & {
            user: import(".prisma/client").User[];
        }) | null>;
    };
};
export default companyResolvers;
