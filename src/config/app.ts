import dotenv from 'dotenv';
dotenv.config();

export default {
    APP_PORT: parseInt(process.env.APP_PORT as string),
    APP_MODE: process.env.APP_MODE as string,
    JWT_SECRET: process.env.JWT_SECRET as string,
    JWT_EXPIRED: process.env.JWT_EXPIRED as string,
    BCRYPT_SALT: parseInt(process.env.BCRYPT_SALT as string),
    RAND_TOKEN: parseInt(process.env.RAND_TOKEN as string),
};
