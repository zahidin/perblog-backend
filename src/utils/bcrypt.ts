import bcrypt from 'bcryptjs';
import config from '@/config/app';

export function encryptPassword(password: string): string {
    return bcrypt.hashSync(password, config.BCRYPT_SALT);
}

export function checkingPassword(password: string, encryptPassword: string): boolean {
    return bcrypt.compareSync(password, encryptPassword);
}
