import { ObjectID } from 'typeorm';

export type User = {
    id?: string | ObjectID | undefined;
    username?: string;
    firstName?: string;
    lastName?: string;
    password?: string;
    token?: string;
    refreshToken?: string;
    revokeToken?: number;
    create_at?: Date;
    update_at?: Date;
};
