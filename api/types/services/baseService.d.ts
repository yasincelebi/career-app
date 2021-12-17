import { PrismaClient } from '@prisma/client';
declare const prisma: PrismaClient<import(".prisma/client").Prisma.PrismaClientOptions, never, import(".prisma/client").Prisma.RejectOnNotFound | import(".prisma/client").Prisma.RejectPerOperation | undefined>;
declare let BaseModel: keyof typeof prisma;
export default class BaseService {
    constructor(model: typeof BaseModel);
    find: ({ value }: {
        value: any;
    }) => Promise<void>;
    listAll: () => Promise<void>;
    create: ({ value }: {
        value: any;
    }) => Promise<void>;
    updateWithID: <T>({ value }: {
        value: any;
    }) => Promise<T>;
    deleteWithID: ({ value }: {
        value: any;
    }) => Promise<void>;
}
export {};
