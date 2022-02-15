import {Company, Job, PrismaClient} from '@prisma/client';
import BaseService from './baseService';

const prisma = new PrismaClient();
export default class CompanyService extends BaseService<Company> {

  addJobToCompany = async ({
    value,
    data,
  }: {
    value: string;
    data: Job;
  }): Promise<any> => {
    const asd = prisma.job.create({
      data: {
        title: data.title,
        description: data.description,
        company: {
          connect: {
            id: value,
          },
        },
      },
    });

    return asd;
  };

  removeJobFromCompany = async ({
    where,
    value,
    data,
  }: {
    where: string;
    value: string;
    data: Job;
  }): Promise<Company | null> => {
    const result = await prisma.company.update({
      where: {
        [where]: value,
      },
      data: {
        jobs: {
          disconnect: {
            id: data.id,
          },
        },
      },
    });
    return result;
  };

  listAll = async (): Promise<any> => {
    const result = await prisma.company.findMany({
      include: {
        jobs: true,
      },
    });
    return result;
  };
}
