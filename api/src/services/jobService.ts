import { Job, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
export default class JobService {
  public create = async ({ value }: { value: any }): Promise<any> => {
    const result = await prisma.job.create({
      data: { ...value, company: { connect: { id: value.company.id } } },
    });
    console.log(result);
    return result;
  };

  public update = async ({
    where,
    value,
    data,
  }: {
    where: string;
    value: any;
    data: Job;
  }): Promise<Job> => {
    const result = await prisma.job.update({
      where: {
        [where]: value,
      },
      data,
    });
    return result;
  };

  public delete = async ({ where, value }: { where: string; value: string }): Promise<Job> => {
    const result = await prisma.job.delete({
      where: {
        [where]: value,
      },
    });
    return result;
  };

  public find = async ({ where, value }: { where: string; value: any }): Promise<any> => {
    const result = await prisma.job.findUnique({
      where: {
        [where]: value,
      },
      include: {
        company: true,
      },
    });
    return result;
  };

  public listAll = async (): Promise<Job[]> => {
    const result = await prisma.job.findMany();
    return result;
  };
}