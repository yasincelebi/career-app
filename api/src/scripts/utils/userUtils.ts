import { User } from '@prisma/client';
import CryptoJS from 'crypto-js';
import jsonwebtoken from 'jsonwebtoken';

export default class UserUtils {
  public hashPassword = (password: string): string =>
    // eslint-disable-next-line implicit-arrow-linebreak
    CryptoJS.HmacSHA256(
      CryptoJS.HmacSHA256(password, <string>process.env.PASSWORD_HASH_KEY).toString(),
      <string>process.env.PASSWORD_HASH_KEY,
    ).toString();

  public generateAccessToken = (user: User): string => {
    const token = jsonwebtoken.sign(user, <string>process.env.JWT_ACCESS_TOKEN_SECRET, {
      algorithm: 'HS256',
      expiresIn: '1w',
    });
    return token;
  };

  public generateRefreshToken = (user: User): string => {
    const token = jsonwebtoken.sign(user, <string>process.env.JWT_REFRESH_TOKEN_SECRET, {
      algorithm: 'HS256',
      expiresIn: '30d',
    });
    return token;
  };
}
