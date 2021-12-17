import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

let BaseModel: keyof typeof prisma;

export default class BaseService {
  constructor(model: typeof BaseModel) {
    BaseModel = model;
  }

  public find = async ({ value }: { value: any }): Promise<void> => {
    const result = await (prisma as any)[BaseModel].findUnique({
      where: {
        value,
      },
    });
    return result;
  };

  public listAll = async (): Promise<void> => {
    const result = await (prisma as any)[BaseModel].findMany();
    return result;
  };

  public create = async ({ value }: { value: any }): Promise<void> => {
    const result = await (prisma as any)[BaseModel].create({
      data: value,
    });
    return result;
  };

  public updateWithID = async <T>({ value }: { value: any }): Promise<T> => {
    const result = await (prisma as any)[BaseModel].update({
      where: {
        id: value.id,
      },
      data: value,
    });
    return result;
  };

  public deleteWithID = async ({ value }: { value: any }): Promise<void> => {
    const result = await (prisma as any)[BaseModel].delete({
      where: {
        id: value.id,
      },
    });
    return result;
  };
}
