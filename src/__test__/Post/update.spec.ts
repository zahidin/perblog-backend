import 'module-alias/register';
import 'reflect-metadata';

import { assert } from 'chai';
import { Post } from '../../types/post';
import { User as TypeUser } from '../../types/user';
import { TestFactory } from '../factory';
import { describe, it } from 'mocha';
import { WRONG_AUTHENTICATION, ACCESS_DENIED } from '../../constant/flag';
import { generateToken } from '../../utils/jwt';
import { mockTestPost } from '../../__mocks__/post';
import { mockTestUser } from '../../__mocks__/user';
import { User } from '../../entity/User';

describe('User admin update post', () => {
    const factory: TestFactory = new TestFactory();

    const testUser: TypeUser = mockTestUser;
    delete testUser.firstName;
    delete testUser.lastName;

    let token: string;
    const testPost: Post = mockTestPost;
    const URL = `/api/v1/post/${testPost.title}`;
    const URL_LOGIN = `/api/v1/authentication/login`;

    before(async () => {
        await factory.init();
    });

    after(async () => {
        await factory.close();
    });

    describe('[Post] PUT /POST', () => {
        it('login with user already exists', done => {
            factory.app
                .post(URL_LOGIN)
                .send(testUser)
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200)
                .end((err, res) => {
                    try {
                        const { success } = res.body;
                        const result = res.body.result;

                        assert(success === true, 'status does not match');
                        assert.isObject(result, 'user should be an object');
                        assert.isString(result.token, 'token should be an string');
                        token = `Bearer ${result.token}`;

                        return done();
                    } catch (error) {
                        return done(error);
                    }
                });
        });

        it('response with no body data', done => {
            factory.app
                .put(URL)
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(401, done);
        });

        it('response with update data post', done => {
            factory.app
                .put(URL)
                .send(testPost)
                .set('authorization', token)
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200)
                .end((err, res) => {
                    try {
                        if (err) throw err;
                        const { success, message } = res.body;
                        const result = res.body.result;

                        // Assert status
                        assert(success === true, 'status does not match');
                        assert(message === 'Success', 'message does not match');

                        // Assert user
                        assert.isObject(result, 'result should be an object');
                        assert(result.success === 1, 'result should be an boolean or 1 and 0');

                        return done();
                    } catch (error) {
                        return done(error);
                    }
                });
        });

        it('response update post with token incorrect', done => {
            factory.app
                .put(URL)
                .send(testPost)
                .set('authorization', `${token}wrong`)
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(401)
                .end((err, res) => {
                    try {
                        if (err) throw err;
                        const { success, flag, message } = res.body;

                        // Assert status
                        assert(success === false, 'status does not match');
                        assert(flag === ACCESS_DENIED.flag, 'flag does not match');
                        assert(message === ACCESS_DENIED.message, 'message does not match');

                        return done();
                    } catch (error) {
                        return done(error);
                    }
                });
        });
    });
});
