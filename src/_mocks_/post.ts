import faker from 'faker';
import { Post } from '@/types/post';

export const mockTestPost: Post = {
    title: 'DATA TESTING',
    slug: 'data-testing',
    date: faker.date.past().toString(),
    content: faker.lorem.paragraphs(),
    tags: faker.lorem.word(),
};
