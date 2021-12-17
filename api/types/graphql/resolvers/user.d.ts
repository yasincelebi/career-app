declare const userResolvers: {
    Query: {
        allUsers: () => import(".prisma/client").PrismaPromise<import(".prisma/client").User[]>;
        oneUser: (_: any, { id }: {
            id: string;
        }) => import(".prisma/client").Prisma.Prisma__UserClient<(import(".prisma/client").User & {
            Company: import(".prisma/client").Company | null;
        }) | null>;
    };
};
export default userResolvers;
