import { User } from '@prisma/client';
export default class UserUtils {
    hashPassword: (password: string) => string;
    generateAccessToken: (user: User) => string;
    generateRefreshToken: (user: User) => string;
}
