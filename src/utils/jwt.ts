import jwt from 'jsonwebtoken';
import randToken from 'rand-token';
import config from '@/config/app';
import { User } from '@/types/user';

export function generateToken(data: User): string {
    return jwt.sign(data, config.JWT_SECRET, { expiresIn: config.JWT_EXPIRED });
}

export function generateRefreshToken(): string {
    return randToken.uid(config.RAND_TOKEN);
}

export function checkJwt(token: string): User {
    return jwt.verify(token, config.JWT_SECRET) as User;
}
