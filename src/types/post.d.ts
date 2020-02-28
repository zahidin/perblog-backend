import { ObjectID } from 'typeorm';

export type Post = {
    id: ObjectID;
    title: string;
    date: string;
    content: string;
    tags: string;
};
