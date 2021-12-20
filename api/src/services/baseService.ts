import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

type IBaseModel = keyof typeof prisma;

export default class BaseService {
  BaseModel: IBaseModel;

  constructor(model: IBaseModel) {
    this.BaseModel = model;
  }

  public find = async ({ where, value }: { where: string; value: any }): Promise<any> => {
    const result = await (prisma as any)[this.BaseModel].findUnique({
      where: {
        [where]: value,
      },
    });
    return result;
  };

  public listAll = async (): Promise<void> => {
    const result = await (prisma as any)[this.BaseModel].findMany();
    return result;
  };

  public create = async ({ value }: { value: any }): Promise<any> => {
    const result = await (prisma as any)[this.BaseModel].create({
      data: value,
    });
    return result;
  };

  public update = async <T>({
    where,
    value,
    data,
  }: {
    where: string;
    value: any;
    data: T;
  }): Promise<T> => {
    const result = await (prisma as any)[this.BaseModel].update({
      where: {
        [where]: value,
      },
      data,
    });
    return result;
  };

  public delete = async ({ where, value }: { where: string; value: string }): Promise<void> => {
    const result = await (prisma as any)[this.BaseModel].delete({
      where: {
        [where]: value,
      },
    });
    return result;
  };
}
