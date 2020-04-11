import { assert } from 'chai';
import { Post } from '../../types/post';
import { User as TypeUser } from '../../types/user';
import { TestFactory } from '../factory';
import { describe, it } from 'mocha';
import { WRONG_AUTHENTICATION, ACCESS_DENIED } from '../../constant/flag';
import { mockTestPost } from '../../__mocks__/post';
import { mockTestUser } from '../../__mocks__/user';

describe('User admin create new post', () => {
    const factory: TestFactory = new TestFactory();

    const testUser: TypeUser = mockTestUser;
    delete testUser.firstName;
    delete testUser.lastName;

    let token: string;
    const testPost: Post = mockTestPost;
    const URL = `/api/v1/post`;
    const URL_LOGIN = `/api/v1/authentication/login`;

    before(async () => {
        await factory.init();
    });

    after(async () => {
        await factory.close();
    });

    describe('[Post] POST /POST', () => {
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
                .post(URL)
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(401, done);
        });

        it('response with new data post', done => {
            factory.app
                .post(URL)
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
                        assert(result.title === testPost.title, 'result title should be an string');
                        assert(result.date === testPost.date, 'result date should be an string');
                        assert(result.content === testPost.content, 'result content should be an string');
                        assert(result.tags === testPost.tags, 'result tags should be an string');

                        return done();
                    } catch (error) {
                        return done(error);
                    }
                });
        });

        it('response create post with token incorrect', done => {
            factory.app
                .post(URL)
                .send(testPost)
                .set('authorization', `${token}s`)
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
