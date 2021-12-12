import { Company, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default class CompanyService {
  getCompany = async (id: string): Promise<Company | null> => {
    const company = await prisma.company.findUnique({
      where: {
        id,
      },
    });

    return company;
  };

  // get company with users
  getCompanies = async (): Promise<Company[] | null> => {
    const companies = await prisma.company.findMany({
      include: {
        User: true,
      },
    });

    return companies;
  };

  createCompany = async (company: Company): Promise<Company | null> => {
    const newCompany = await prisma.company.create({
      data: company,
    });
    console.log(newCompany);

    return newCompany;
  };

  updateCompany = async (id: string, company: any): Promise<Company | null> => {
    const updatedCompany = await prisma.company.update({
      where: {
        id,
      },
      data: company,
    });

    return updatedCompany;
  };

  deleteCompany = async (id: string): Promise<Company | null> => {
    const deletedCompany = await prisma.company.delete({
      where: {
        id,
      },
    });

    return deletedCompany;
  };
}
