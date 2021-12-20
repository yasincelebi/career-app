import BaseService from './baseService';

export default class CompanyService extends BaseService {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super('company');
  }

  addJobToCompany = async ({
    where,
    value,
    data,
  }: {
    where: string;
    value: string;
    data: any;
  }): Promise<any> => {
    const result = await this.update({
      where,
      value,
      data: {
        jobs: {
          connect: {
            id: data.id,
          },
        },
      },
    });
    return result;
  };

  removeJobFromCompany = async ({
    where,
    value,
    data,
  }: {
    where: string;
    value: string;
    data: any;
  }): Promise<any> => {
    const result = await this.update({
      where,
      value,
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
}
