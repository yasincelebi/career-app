import { User } from '@prisma/client';
import BaseService from './baseService';
export default class UserService extends BaseService {
    constructor();
    getUserByEmail(email: any): Promise<User | null>;
}
