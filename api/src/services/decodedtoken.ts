import Authenticate from '../middlewares/authenticate';

const decodedToken = (req: any, requireAuth = true): any => {
  const header = req.req.headers.authorization;

  if (header) {
    const token = header.replace('Bearer ', '');
    const decoded = new Authenticate().getUser(token);
    return decoded;
  }
  if (requireAuth) {
    throw new Error('Login in to access resource');
  }
  return null;
};
module.exports = { decodedToken };
