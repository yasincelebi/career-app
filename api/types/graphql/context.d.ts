import { PrismaClient } from '@prisma/client';
export interface Context {
    prisma: PrismaClient;
}
export declare const context: Context;
