import { User } from '@prisma/client';
import UserUtils from '../../scripts/utils/userUtils';
import UserService from '../../services/userService';

const { decodedToken } = require('../../services/decodedtoken');

const userUtils = new UserUtils();
const userService = new UserService();
const userResolvers = {
  Query: {
    allUsers: () => userService.listAll(),
    oneUser: (_: any, { where, value }: { where: string; value: string }) =>
      userService.find({ where, value }),
    users: (
      _root: any,
      _args: any,
      { prisma, req }: { prisma: any; req: any },
      _info: any,
    ): any => {
      const decoded = decodedToken(req);
      if (decoded) {
        return prisma.users();
      }
    },
  },
  Mutation: {
    createUser: (_: any, { value }: { value: User }) => {
      const user = { ...value, password: userUtils.hashPassword(value.password) };
      return userService.create({ value: user });
    },
    deleteUser: (_: any, { where, value }: { where: string; value: string }) =>
      userService.delete({ where, value }),
    loginUser: (_: any, { email, password }: { email: string; password: string }, context: any) =>
      userService.loginUser({ email, password }).then((user) => {
        context.req.res.cookie('accessToken', user.accessToken, {
          httpOnly: true,
          maxAge: 1000 * 60 * 60 * 24 * 7,
        });
        context.req.res.cookie('refreshToken', user.refreshToken, {
          httpOnly: true,
          maxAge: 1000 * 60 * 60 * 24 * 7,
        });

        return user;
      }),
  },
};

export default userResolvers;
