
export default abstract class BaseService<T> {

  constructor() {
    if (new.target === BaseService) {
      throw new Error('BaseService is an abstract class and cannot be instantiated directly.');
    }
  }

  // @ts-ignore
  // eslint-disable-next-line no-unused-vars
  public find = async ({where, value}: { where: string; value: any }): Promise<T | null> => {
    throw new Error('Method not implemented.');
  };

  public listAll = async (): Promise<T[]> => {
    throw new Error('Method not implemented.');
  };

  // @ts-ignore
  // eslint-disable-next-line no-unused-vars
  public create = async ({value}: { value: any }): Promise<T> => {
    throw new Error('Method not implemented.');
  };

  // @ts-ignore
  // eslint-disable-next-line no-unused-vars
  public update = async ({where, value, data}: {
    where: string;
    value: string;
    data: any;
  }): Promise<any> => {
    throw new Error('Method not implemented.');
  };

  // @ts-ignore
  // eslint-disable-next-line no-unused-vars
  public delete = async ({where, value}: { where: string; value: string }): Promise<T | null> => {
    throw new Error('Method not implemented.');
  };
}
