import { ObjectID } from 'typeorm';

export type Post = {
    id?: string | ObjectID | undefined;
    title?: string;
    date?: string;
    content?: string;
    tags?: string;
    slug?: string;
    create_at?: Date;
    update_at?: Date;
};
