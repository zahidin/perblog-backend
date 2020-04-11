import { User } from '@/types/user';

export const mockTestUser: User = {
    firstName: 'Alexander',
    lastName: 'Kusni',
    username: 'tester007',
    password: '123qwe',
};

export const testUserModified: User = {
    ...mockTestUser,
    username: 'testUsernameModified',
    password: 'testPasswordModified',
};
