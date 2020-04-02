import jwt from 'jsonwebtoken';
import randToken from 'rand-token';
import config from '@/config/app';

export function generateToken(data: {}): string {
    return jwt.sign(data, config.JWT_SECRET, { expiresIn: config.JWT_EXPIRED });
}

export function generateRefreshToken(): string {
    return randToken.uid(config.RAND_TOKEN);
}

export function checkJwt(token: string): string | object {
    return jwt.verify(token, config.JWT_SECRET);
}
