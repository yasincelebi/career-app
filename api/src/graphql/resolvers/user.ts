import { User } from '@prisma/client';
import UserUtils from '../../scripts/utils/userUtils';
import UserService from '../../services/userService';

const userUtils = new UserUtils();
const userService = new UserService();
const userResolvers = {
  Query: {
    allUsers: () => userService.listAll(),
    oneUser: (_: any, { where, value }: { where: string; value: string }) =>
      userService.find({ where, value }),
  },
  Mutation: {
    createUser: (_: any, { value }: { value: User }) => {
      const user = { ...value, password: userUtils.hashPassword(value.password) };
      return userService.create({ value: user });
    },
    deleteUser: (_: any, { where, value }: { where: string; value: string }) =>
      userService.delete({ where, value }),
  },
};

export default userResolvers;
