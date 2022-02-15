import { Company } from '@prisma/client';
import CompanyService from '../../services/companyService';

const companyService = new CompanyService();
const companyResolvers = {
  Query: {
    allCompanies: () => companyService.listAll(),
    findOneCompany: (_: any, { where, value }: { where: string; value: string }) =>
      companyService.find({ where, value }),
  },
  Mutation: {
    updateCompany: (_: any, { where, value, data }: { where: string; value: any; data: Company }) =>
      companyService.update({ where, value, data }),
    createCompany: (_: any, { data }: { data: Company }) => companyService.create({ value: data }),
    deleteCompany: (_: any, { where, value }: { where: string; value: string }) =>
      companyService.delete({ where, value }),
    addJobToCompany: (
      _: any,
      { value, data }: { value: string; data: any },
    ) => companyService.addJobToCompany({ value, data }),
    removeJobFromCompany: (
      _: any,
      { where, value, data }: { where: string; value: string; data: any },
    ) => companyService.removeJobFromCompany({ where, value, data }),
  },
};

export default companyResolvers;
